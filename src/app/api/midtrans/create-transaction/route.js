import { NextResponse } from "next/server";
import midtransClient from "midtrans-client";
export async function POST(request) {
    try {
        // Ambil data yang dikirim dari halaman detail produk
        const { id, productName, price, quantity, customerName, email, phone, date, pickupTime, pickupPoint, note } = await request.json();
        // Jalankan library midtrans
        let snap = new midtransClient.Snap({
        isProduction: false, // Ubah ke true nanti jika sudah live
        serverKey: process.env.MIDTRANS_SERVER_KEY,
        });
        // Format data transaksi sesuai standar Midtrans
        let parameter = {
        transaction_details: {
            order_id: Date.now().toString() + Math.floor(Math.random() * 10000),
            gross_amount: price * quantity,
        },
        item_details: [{
            id: id,
            price: price,
            quantity: quantity,
            name: productName, 
        }],
        customer_details: {
            first_name: customerName,
            email: email,
            phone: phone
        },

        custom_field1: `Tour Date: ${date} | Time: ${pickupTime}`,
        custom_field2: `Pickup at: ${pickupPoint}`,
        custom_field3: `Note: ${note || '-'}`
        };

        // Minta token transaction dari Midtrans
        const transaction = await snap.createTransaction(parameter);
        let transactionToken = transaction.token;
        
        return NextResponse.json({ token: transactionToken });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}