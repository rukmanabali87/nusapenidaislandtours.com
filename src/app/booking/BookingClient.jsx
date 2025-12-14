'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { FiCalendar, FiUser, FiMapPin } from 'react-icons/fi'

export default function BookingClient() {
    const params = useSearchParams()
    const tour = params.get('tour')
    const date = params.get('date')
    const adult = Number(params.get('adult')) || 1

    const [snapLoaded, setSnapLoaded] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [note, setNote] = useState('')

    const tourData = {
        west: { title: "West Nusa Penida Tour", route: "Kelingking – Broken Beach – Angel’s Billabong", price: 65 },
        east: { title: "East Nusa Penida Tour", route: "Diamond Beach – Atuh – Tree House", price: 70 },
        combo: { title: "Combination Nusa Penida Tour", route: "West & East Highlights", price: 95 }
    }

    const selectedTour = tourData[tour]
    if (!selectedTour) return <div className="p-10">Invalid booking</div>

    const total = selectedTour.price * adult

    // Load Midtrans Snap script
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://app.sandbox.midtrans.com/snap/snap.js'
        script.setAttribute('data-client-key', process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY)
        script.onload = () => setSnapLoaded(true)
        document.body.appendChild(script)
        return () => document.body.removeChild(script)
    }, [])

    const handleSubmit = async () => {
        if (!snapLoaded) { alert("Payment script is loading, please wait"); return }
        if (!name || !phone) { alert("Name and WhatsApp number required"); return }

        const orderId = `ORDER-${Date.now()}`
        const usdAmount = total

        const res = await fetch('/api/midtrans', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderId, usdAmount, customer: { name, email, phone } })
        })

        if (!res.ok) { alert("Payment API error"); return }

        const data = await res.json()

        window.snap.pay(data.token, {
            onSuccess: (result) => alert("Payment success!"),
            onPending: (result) => alert("Waiting for payment"),
            onError: (result) => alert("Payment failed"),
            onClose: () => alert("Payment popup closed")
        })
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Booking Information</h1>

            <div className="border rounded-xl p-5 mb-8 shadow">
                <h2 className="text-xl font-semibold">{selectedTour.title}</h2>
                <p className="text-slate-500 flex items-center gap-2 mt-1"><FiMapPin /> {selectedTour.route}</p>
                <p className="mt-2 flex items-center gap-2"><FiCalendar /> {date}</p>
                <p className="mt-2 flex items-center gap-2"><FiUser /> {adult} Adult</p>
                <p className="mt-3 text-lg font-semibold text-primary">Total: ${total}</p>
            </div>

            <div className="space-y-4">
                <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-lg p-3" />
                <input type="email" placeholder="Email (optional)" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded-lg p-3" />
                <input type="text" placeholder="WhatsApp Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border rounded-lg p-3" />
                <textarea placeholder="Special request (optional)" value={note} onChange={(e) => setNote(e.target.value)} className="w-full border rounded-lg p-3" />

                <button onClick={handleSubmit} className="w-full bg-primary text-white py-3 rounded-lg text-lg hover:bg-primary/90 transition">
                    Pay Now
                </button>
            </div>
        </div>
    )
}
