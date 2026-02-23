import { DM_Sans, Dancing_Script } from "next/font/google";
import "./assets/css/tailwind.css";
import "./assets/css/materialdesignicons.min.css";
import WhatsappButton from "./components/WhatsappButton";
import { SITE_URL } from "@/lib/config";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-dm-sans',
});

const dancing_script = Dancing_Script({
  subsets: ["latin"],
  variable: '--font-dancing_script',
});

export const metadata = {
  title: "Nusa Penida Island Tours – Best Private Tour & Snorkeling Packages",
  description: "Book the best Nusa Penida Island tours with private driver, snorkeling at Manta Point, fast boat tickets, and customizable Bali tour packages.",
  keywords: [
        "nusa penida island tours",
        "nusa penida tour",
        "private nusa penida tour",
        "nusa penida day trip",
  ],
    alternates: {
        canonical: SITE_URL,
    },
  openGraph: {
        title: "West Nusa Penida Tour – Private Day Trip",
        description:
            "Explore the western side of Nusa Penida including Kelingking Beach, Broken Beach, Angels Billabong, and Crystal Bay with a private driver.",
        url: SITE_URL,
        siteName: "Nusa Penida Island Tours",
        images: [
            {
                url: `${SITE_URL}/images/west-penida.jpg`,
                width: 1200,
                height: 630
            }
        ],
        type: "article"
    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      
      <body className={`${dm_sans.variable} ${dancing_script.variable}  bg-white dark:bg-slate-900`}>{children}<WhatsappButton /></body>
    </html>
  );
}

<script
  src="https://app.sandbox.midtrans.com/snap/snap.js"
  data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
/>