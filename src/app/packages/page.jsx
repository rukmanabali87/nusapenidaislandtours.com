import { Suspense } from "react";
import PackagesClient from "@/app/components/packages-client";

export const metadata = {
    title: "All Tour Packages | Rukmana Bali Tour",
    description: "Browse curated Bali tour packages by Rukmana Bali Tour, offering flexible itineraries and private travel experiences across the island.",
};

export default function Page() {
    return (
        <Suspense fallback={<div className="py-24 text-center">Loading packages...</div>}>
            <PackagesClient />
        </Suspense>
    );
}