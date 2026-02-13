import { notFound } from "next/navigation";
import { toursData } from "@/app/data/data";
import TourDetailPage from "@/app/components/tour-detail-page";

export function generateStaticParams() {
    return toursData.map((tour) => ({
        slug: tour.slug,
    }));
    }

    export default async function TourDetail({ params }) {
    const { slug } = await params;

    const tour = toursData.find(
        (item) => item.slug === slug
    );

    if (!tour) return notFound();

    return <TourDetailPage data={tour} />;
}