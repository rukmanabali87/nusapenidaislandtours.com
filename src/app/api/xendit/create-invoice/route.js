import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { id, productName, price, quantity, customerName, email, phone, nationality, date, pickupTime, pickupPoint, note } = await request.json();

        // 1. OPTIMASI: Validasi keamanan dasar untuk mencegah manipulasi data dari frontend
        if (!price || price <= 0 || !quantity || quantity <= 0) {
            return NextResponse.json({ error: "Invalid price or quantity" }, { status: 400 });
        }

        // 2. OPTIMASI: Gunakan UUID yang dijamin 100% unik dan standar industri
        const orderId = crypto.randomUUID(); 
        const grossAmount = price * quantity;

        const tourDescription = `Nationality: ${nationality} | Date: ${date} | Time: ${pickupTime} | Pickup: ${pickupPoint || '-'} | Note: ${note || '-'}`;

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        
        // URL Redirect
        const successUrl = `${baseUrl}/success?orderId=${orderId}`;
        const failureUrl = `${baseUrl}/`; // 3. OPTIMASI: Arahkan ke Home atau halaman khusus jika gagal bayar

        const payload = {
            external_id: orderId,
            amount: grossAmount,
            payer_email: email,
            description: tourDescription,
            invoice_duration: 3600, // 4. OPTIMASI: Invoice kedaluwarsa dalam 3600 detik (1 Jam). Sesuaikan kebutuhan.
            success_redirect_url: successUrl,
            failure_redirect_url: failureUrl, 
            customer: {
                given_names: customerName,
                email: email,
                mobile_number: phone
            },
            items: [
                {
                    id: id,
                    name: productName,
                    quantity: quantity,
                    price: price,
                    category: "Tour"
                }
            ]
        };

        const secretKey = process.env.XENDIT_SECRET_KEY + ":";
        const encodedKey = Buffer.from(secretKey).toString('base64');

        const response = await fetch('https://api.xendit.co/v2/invoices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encodedKey}`
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Gagal membuat invoice Xendit");
        }

        return NextResponse.json({ invoiceUrl: data.invoice_url });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}