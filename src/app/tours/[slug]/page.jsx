import { toursData } from "@/app/data/data";
import TourDetailPage from "@/app/components/tour-detail-page";
import Error from "@/app/404/page";

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

    if (!tour) return <Error/>;

    return <TourDetailPage data={tour} />;
}