import Midtrans from 'midtrans-client'

export async function POST(req) {
  try {
    const { orderId, usdAmount, customer } = await req.json()

    const USD_TO_IDR = 15500
    const grossAmount = Math.round(usdAmount * USD_TO_IDR)

    const snap = new Midtrans.Snap({
      isProduction: false,
      serverKey: process.env.MIDTRANS_SERVER_KEY
    })

    const transaction = await snap.createTransaction({
      transaction_details: { order_id: orderId, gross_amount: grossAmount },
      credit_card: { secure: true },
      customer_details: customer
    })

    return new Response(JSON.stringify({
      token: transaction.token,
      redirect_url: transaction.redirect_url
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
