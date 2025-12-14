'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { FiCalendar, FiUser, FiMapPin } from 'react-icons/fi'

export default function BookingClient() {
    const params = useSearchParams()

    const tour = params.get('tour')
    const date = params.get('date')
    const adult = Number(params.get('adult')) || 1

    const tourData = {
        west: {
            title: "West Nusa Penida Tour",
            route: "Kelingking – Broken Beach – Angel’s Billabong",
            price: 65
        },
        east: {
            title: "East Nusa Penida Tour",
            route: "Diamond Beach – Atuh – Tree House",
            price: 70
        },
        combo: {
            title: "Combination Nusa Penida Tour",
            route: "West & East Highlights",
            price: 95
        }
    }

    const selectedTour = tourData[tour]
    if (!selectedTour) {
        return <div className="p-10">Invalid booking</div>
    }

    const total = selectedTour.price * adult

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [note, setNote] = useState('')

    const handleSubmit = () => {
        if (!name || !phone) {
            alert('Name and WhatsApp number are required')
            return
        }

        const message = `
Hello, I want to book:

Tour: ${selectedTour.title}
Date: ${date}
Adult: ${adult}
Total: $${total}

Name: ${name}
Email: ${email}
Phone: ${phone}
Note: ${note}
        `

        const waUrl = `https://wa.me/62${phone.replace(/^0/, '')}?text=${encodeURIComponent(message)}`
        window.open(waUrl, '_blank')
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Booking Information</h1>

            {/* SUMMARY */}
            <div className="border rounded-xl p-5 mb-8 shadow">
                <h2 className="text-xl font-semibold">{selectedTour.title}</h2>
                <p className="text-slate-500 flex items-center gap-2 mt-1">
                    <FiMapPin /> {selectedTour.route}
                </p>
                <p className="mt-2 flex items-center gap-2">
                    <FiCalendar /> {date}
                </p>
                <p className="mt-2 flex items-center gap-2">
                    <FiUser /> {adult} Adult
                </p>
                <p className="mt-3 text-lg font-semibold text-primary">
                    Total: ${total}
                </p>
            </div>

            {/* FORM */}
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded-lg p-3"
                />

                <input
                    type="email"
                    placeholder="Email (optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded-lg p-3"
                />

                <input
                    type="text"
                    placeholder="WhatsApp Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border rounded-lg p-3"
                />

                <textarea
                    placeholder="Special request (optional)"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full border rounded-lg p-3"
                />

                <button
                    onClick={handleSubmit}
                    className="w-full bg-primary text-white py-3 rounded-lg text-lg hover:bg-primary/90 transition"
                >
                    Confirm Booking via WhatsApp
                </button>
            </div>
        </div>
    )
}
