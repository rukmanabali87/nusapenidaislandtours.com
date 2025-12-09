import { DM_Sans, Dancing_Script } from "next/font/google";
import "./assets/css/tailwind.css";
import "./assets/css/materialdesignicons.min.css";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <body className={`${dm_sans.variable} ${dancing_script.variable}  bg-white dark:bg-slate-900`}>{children}</body>
    </html>
  );
}
