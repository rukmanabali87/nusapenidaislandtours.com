import { toursData } from "@/app/data/data";
import TourDetailPage from "@/app/components/tour-detail-page";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/config";

export function generateStaticParams() {
    return toursData.map((tour) => ({
        slug: tour.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const tour = toursData.find(
        (item) => item.slug === slug
    );

    if (!tour) {
        return {
            title: "Tour Not Found",
            description: "The requested tour does not exist.",
        };
    }

    return {
        title: `${tour.productData.title} | Nusa Penida Island Tours`,
        description: tour.productData.desc1.slice(0, 155),

        alternates: {
            canonical: `${SITE_URL}/tours/${tour.slug}`,
        },

        openGraph: {
            title: tour.productData.title,
            description: tour.productData.desc1,
            url: `${SITE_URL}/tours/${tour.slug}`,
            siteName: "Nusa Penida Island Tours",
            images: [
                {
                    url: `${SITE_URL}${tour.images[0].src}`,
                    width: 1200,
                    height: 630,
                    alt: tour.images[0].alt,
                },
            ],
            locale: "en_US",
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: tour.productData.title,
            description: tour.productData.desc1,
            images: [`${SITE_URL}${tour.images[0].src}`],
        },
    };
}

export default async function TourDetail({ params }) {
    const { slug } = await params;

    const tour = toursData.find(
        (item) => item.slug === slug
    );

    if (!tour) return notFound();

    return <TourDetailPage data={tour} />;
}