import { FiLinkedin, FiFacebook, FiInstagram, FiTwitter, FiMail, FiClock, FiActivity, FiUsers, FiGlobe, FiDollarSign, FiYoutube, FiHelpCircle, FiBookmark, FiSettings, FiGithub, FiGitlab } from "react-icons/fi"
import { FaTiktok, FaMapPin, FaCameraRetro } from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";

export const topDestination = [
    {
        image: '/images/listing/angel-billabong.jpg',
        place: 'Angel Billabong'
    },
    {
        image: '/images/listing/broken-beach.jpg',
        place: 'Broken Beach'
    },
    {
        image: '/images/listing/diamond-beach.jpg',
        place: 'Diamond Beach'
    },
    {
        image: '/images/listing/kelingking-beach.jpg',
        place: 'Klingking Beach'
    },
    {
        image: '/images/listing/crystal-bay.jpg',
        place: 'Crystal Bay'
    },
    {
        image: '/images/listing/Rumah-pohon.jpg',
        place: 'Rumah Pohon'
    },
    {
        image: '/images/listing/manta-bay.jpg',
        place: 'Manta Bay'
    },
    {
        image: '/images/listing/nusa-penida-harbour.jpg',
        place: 'Nusa Penida Harbour'
    },
];

export const toursData = [
    {
        slug: "west-nusa-penida-tour",

        productData: {
        title: "West Nusa Penida Tour",
        place: "Nusa Penida, Bali",
        desc1:
            "Experience the beauty of West Nusa Penida on a private and comfortable full-day tour. This trip takes you to the island’s most iconic landmarks, including Kelingking Beach, Broken Beach, Angel’s Billabong, and Crystal Bay. Each location offers breathtaking cliff views, turquoise waters, and perfect photo opportunities for couples, families, and adventure travelers.",
        desc2:
            "During the tour, you will travel in a private air-conditioned car with a friendly English-speaking local driver who will guide you to each destination. Fast boat tickets from Sanur to Nusa Penida are included, ensuring a smooth and hassle-free journey. Whether you're looking for relaxation or adventure, this tour provides the perfect blend of comfort, flexibility, and unforgettable scenery.",
        desc3:
            "This tour is ideal for travelers who want a safe, customizable, and private experience on one of Bali’s most beautiful islands. With transparent pricing and no hidden fees, you can enjoy the day stress-free while exploring the best highlights of West Nusa Penida.",
        },

        images: [
            { src: "/images/tours/west-nusa-penida-tour/1.jpg", alt: "Kelingking Beach" },
            { src: "/images/tours/west-nusa-penida-tour/2.jpg", alt: "Broken Beach" },
            { src: "/images/tours/west-nusa-penida-tour/3.jpg", alt: "Angel's Billabong" },
            { src: "/images/tours/west-nusa-penida-tour/4.jpg", alt: "Crystal Bay" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "12 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Tour" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 1.281.000" },
        ],

        highlightsData: [
            {
                icon: "car",
                title: "Private Car & Driver",
                desc: "Explore comfortably with an expert local island driver.",
            },
            {
                icon: "fastBoat",
                title: "Fast Boat Tickets Included",
                desc: "Round-trip fast boat from Sanur to Nusa Penida.",
            },
            {
                icon: "island",
                title: "Top Destinations",
                desc: "Visit Kelingking, Broken Beach, Angel Billabong, and Crystal Bay.",
            },
        ],

        itineraryData: [
            {
                time: "08:00 AM",
                title: "Fast Boat Check-In",
                desc: "Check-in at Sanur Harbour and prepare for departure to Nusa Penida."
            },
            {
                time: "08:30 AM",
                title: "Depart to Nusa Penida",
                desc: "Fast boat transfer from Sanur to Nusa Penida."
            },
            {
                time: "09:30 AM",
                title: "Arrival & Start Tour",
                desc: "Meet your driver and begin the West Nusa Penida tour."
            },
            {
                time: "10:30 AM",
                title: "Kelingking Beach",
                desc: "Enjoy the iconic cliff views and take photos."
            },
            {
                time: "11:45 AM",
                title: "Broken Beach",
                desc: "Visit the famous natural rock arch formation."
            },
            {
                time: "12:30 PM",
                title: "Angel’s Billabong",
                desc: "Explore the natural infinity pool by the sea."
            },
            {
                time: "01:30 PM",
                title: "Lunch Break",
                desc: "Lunch at a local restaurant (personal expenses)."
            },
            {
                time: "02:45 PM",
                title: "Crystal Bay",
                desc: "Relax at the beautiful white sand beach."
            },
            {
                time: "04:00 PM",
                title: "Return to Harbour",
                desc: "Transfer back to Nusa Penida Harbour."
            },
            {
                time: "04:30 PM",
                title: "Fast Boat to Sanur",
                desc: "Return by fast boat to Sanur."
            },
            {
                time: "05:30 PM",
                title: "Arrival in Sanur",
                desc: "Arrive at Sanur Harbour."
            },
            {
                time: "06:00 PM",
                title: "Hotel Drop-Off",
                desc: "Transfer back to your hotel."
            },
        ],

        inclusionsData: {
            included: [
                "Private Air-Conditioned Car & Driver",
                "English-Speaking Local Guide",
                "Hotel pick-up & drop-off in Bali",
                "Return fast boat ticket",
                "All entrance tickets",
                "Parking Fees",
            ],
            excluded: [
                "Meals",
                "Personal Expenses",
                "Travel Insurance",
            ],
        },

        faqData: [
            {
                id: 1,
                title: "Is this a full-day tour?",
                desc: "Yes, this is a full-day tour starting in the morning and returning to Bali in the late afternoon."
            },
            {
                id: 2,
                title: "Is this a private tour?",
                desc: "Yes, this is a private tour with a dedicated driver and private air-conditioned vehicle in Nusa Penida."
            },
            {
                id: 3,
                title: "Are fast boat tickets included?",
                desc: "Yes, return fast boat tickets from Sanur to Nusa Penida are included in the package."
            },
            {
                id: 4,
                title: "Is lunch included in the tour price?",
                desc: "Lunch is not included and will be at your own expense at a local restaurant."
            },
            {
                id: 5,
                title: "What places will we visit?",
                desc: "You will visit Kelingking Beach, Broken Beach, Angel’s Billabong, and Crystal Bay."
            },
            {
                id: 6,
                title: "Is the tour suitable for families?",
                desc: "Yes, this tour is suitable for couples, families, and travelers who want a comfortable private experience."
            },
        ],
    },
    {
        slug: "east-nusa-penida-tour",

        productData: {
        title: "East Nusa Penida Tour",
        place: "Nusa Penida, Bali",
        desc1:
            "The East of Nusa Penida Day Tour is a perfect choice for travelers who want to explore the most scenic and unspoiled eastern side of Nusa Penida Island. This full-day tour starts with a convenient hotel pick-up in Bali, followed by a fast boat ride from Sanur to Nusa Penida. Accompanied by a local guide, you will discover dramatic coastal cliffs, turquoise waters, and breathtaking viewpoints that make East Nusa Penida one of Bali’s most photogenic destinations..",
        desc2:
            "During this East Nusa Penida tour, you will visit iconic spots such as Atuh Beach and Diamond Beach, famous for their white sand, crystal-clear ocean, and stunning cliffside panoramas. These locations are ideal for sightseeing, short beach walks, and capturing memorable photos. A lunch break at a local restaurant is available (optional), allowing you to relax and enjoy the island atmosphere before continuing your journey.",
        desc3:
            "The highlight of the East of Nusa Penida Day Tour is a visit to the famous Tree House (Rumah Pohon Molenteng), offering panoramic views over the ocean and rugged cliffs—one of the most Instagrammable spots on the island. After a full day exploring the best of East Nusa Penida, you will return to Bali by fast boat and be transferred back to your hotel, completing an unforgettable Nusa Penida day trip experience.",
        },

        images: [
            { src: "/images/tours/east-nusa-penida-tour/1.jpg", alt: "Tree House" },
            { src: "/images/tours/east-nusa-penida-tour/2.jpg", alt: "Diamond Beach" },
            { src: "/images/tours/east-nusa-penida-tour/3.jpg", alt: "Atuh Beach" },
            { src: "/images/tours/east-nusa-penida-tour/4.jpg", alt: "Sanur Harbour" },
        ],

        tourDetailAbout: [
            { icon: "clock", name: "Duration", title: "12 Hours (Approx.)" },
            { icon: "activity", name: "Type", title: "Tour" },
            { icon: "users", name: "Group Size", title: "15 Peoples" },
            { icon: "globe", name: "Languages", title: "English" },
            { icon: "dollar", name: "Start Price", title: "From IDR 1.281.000" },
        ],

        highlightsData: [
            {
                icon: "mapPin",
                title: "Iconic East Nusa Penida",
                desc: "Atuh Beach, Diamond Beach & Tree House views.",
            },
            {
                icon: "walking",
                title: "Comfortable Day Trip",
                desc: "Hotel pick-up, fast boat & local guide.",
            },
            {
                icon: "camera",
                title: "Photo-Worthy Landscapes",
                desc: "Cliffs, beaches & ocean panoramas.",
            },
        ],

        itineraryData: [
            {
                time: "06:30 AM",
                title: "Hotel Pick-up",
                desc: "Pick-up from your hotel and transfer to Sanur Beach Harbour."
            },
            {
                time: "07:30 AM",
                title: "Fast Boat Check-in",
                desc: "Check-in and boarding fast boat at Sanur Harbour."
            },
            {
                time: "08:00 AM",
                title: "Depart to Nusa Penida",
                desc: "Fast boat departure from Sanur to Nusa Penida (approx. 45 minutes)."
            },
            {
                time: "08:45 AM",
                title: "Arrive at Nusa Penida",
                desc: "Arrive at Nusa Penida Island and meet your local guide."
            },
            {
                time: "09:15 AM",
                title: "Atuh Beach Visit",
                desc: "Enjoy scenic cliff views and a relaxing beach walk at Atuh Beach."
            },
            {
                time: "10:30 AM",
                title: "Diamond Beach Exploration",
                desc: "Explore Diamond Beach and capture stunning coastal photos."
            },
            {
                time: "12:00 PM",
                title: "Lunch Break",
                desc: "Enjoy an included Indonesian lunch at a local restaurant."
            },
            {
                time: "01:00 PM",
                title: "Tree House Visit",
                desc: "Photo stop at Tree House (Rumah Pohon Molenteng) with panoramic views."
            },
            {
                time: "02:30 PM",
                title: "Return to Harbour",
                desc: "Depart for Nusa Penida Harbour."
            },
            {
                time: "03:00 PM",
                title: "Return Fast Boat Check-in",
                desc: "Check-in and board fast boat back to Bali."
            },
            {
                time: "03:30 PM",
                title: "Depart to Bali",
                desc: "Fast boat departure from Nusa Penida to Sanur."
            },
            {
                time: "04:15 PM",
                title: "Arrive in Sanur",
                desc: "Arrive at Sanur Harbour and transfer back to hotel."
            },
            {
                time: "05:00 PM",
                title: "Hotel Drop-off",
                desc: "Arrive at your hotel and end of tour."
            },
        ],

        inclusionsData: {
            included: [
                "Private Air-Conditioned Car & Driver",
                "English-Speaking Local Guide",
                "Hotel pick-up & drop-off in Bali",
                "Return fast boat ticket",
                "Indonesian lunch",
                "All entrance tickets",
                "Insurance",
            ],
            excluded: ["Personal Expenses"],
        },

        faqData: [
            {
                id: 1,
                title: "Is this a full-day tour?",
                desc: "Yes, this is a full-day tour starting early morning and returning to your hotel in the late afternoon."
            },
            {
                id: 2,
                title: "Is lunch included in the tour?",
                desc: "Yes, an Indonesian lunch at a local restaurant is included."
            },
            {
                id: 3,
                title: "Is this tour suitable for children or elderly?",
                desc: "Yes, but some locations involve stairs and uneven paths, so basic mobility is recommended."
            },
            {
                id: 4,
                title: "What should I bring for the tour?",
                desc: "Comfortable shoes, sunscreen, hat, camera, and personal essentials are recommended."
            },
            {
                id: 5,
                title: "Can I customize the itinerary?",
                desc: "Minor adjustments may be possible depending on conditions and should be discussed in advance."
            },
            {
                id:6,
                title:'Is hotel pickup and drop-off available in all areas of Bali?',
                desc:'Hotel pickup and drop-off service is available from selected areas, including Ubud, Denpasar, Canggu, Seminyak, Legian, Kuta, Tuban, Jimbaran, Sanur, Tanjung Benoa, and Nusa Dua. For locations outside these pickup zones, additional charges may apply—please contact us for more details or custom pickup arrangements.'
            },
        ],
    },
];

export const packages = [
    {
        id: 1,
        image: '/images/listing/1.jpg',
        tagText: '10% Off',
        place: 'Nusa Penida',
        title: 'West Nusa Penida Tour',
        amount: 'From $7.00'
    },
    {
        id: 2,
        image: '/images/listing/2.jpg',
        place: 'Nusa Penida',
        title: 'East Nusa Penida Tour',
        amount: 'From $73.00'
    },
    {
        id: 3,
        image: '/images/listing/3.jpg',
        place: 'Nusa Penida',
        title: 'West Nusa Penida + Snorkeling Tour',
        amount: 'From $73.00'
    },
    {
        id: 4,
        image: '/images/listing/4.jpg',
        place: 'Nusa Penida',
        title: 'West + East Tour Combination',
        amount: 'From $73.00'
    },
    {
        id: 5,
        image: '/images/listing/5.jpg',
        place: 'Nusa Penida',
        title: 'Snorkeling at Manta Point',
        amount: 'From $73.00'
    },
    {
        id: 6,
        image: '/images/listing/6.jpg',
        tagText: '25% Off',
        place: 'Nusa Lembongan',
        title: 'Private Nusa Lembongan Tour',
        amount: 'From $73.00'
    },

]

export const ClientData = [
    {
        image: '/images/client/01.jpg',
        desc: '" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "',
        name: 'Calvin Carlo',
        possition: 'Manager'
    },
    {
        image: '/images/client/02.jpg',
        desc: '"The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century."',
        name: 'Christa Smith',
        possition: 'Manager'
    },
    {
        image: '/images/client/03.jpg',
        desc: '" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "',
        name: 'Jemina CLone',
        possition: 'Manager'
    },
    {
        image: '/images/client/04.jpg',
        desc: '" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "',
        name: 'Smith Vodka',
        possition: 'Manager'
    },
    {
        image: '/images/client/05.jpg',
        desc: '" There is now an abundance of readable dummy texts. These are usually used when a text is required. "',
        name: 'Cristino Murfi',
        possition: 'Manager'
    },
    {
        image: '/images/client/06.jpg',
        desc: '" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "',
        name: 'Cristino Murfi',
        possition: 'Manager'
    },
]

export const blogData = [
    {
        id: 1,
        image: '/images/blog/1.jpg',
        date: '13th Sep 2024',
        title: 'The Natural Wonders of Nusa Penida',
        desc: 'Nusa Penida is famous for its towering limestone cliffs and stunning white sand beaches. Some must-visit spots',
        tag: 'Travel'
    },
    {
        id: 2,
        image: '/images/blog/2.jpg',
        date: '29th Nov 2024',
        title: 'Travel Tips for Nusa Penida',
        desc: 'The best way to reach Nusa Penida is by fast boat from Sanur, Bali, and to make the most of your visit',
        tag: 'Tour'
    },
    {
        id: 3,
        image: '/images/blog/3.jpg',
        date: '29th Dec 2024',
        title: 'Why Nusa Penida Should Be on Your Bucket List',
        desc: 'The island offers a unique experience different from mainland Bali: tranquility, raw natural beauty, and thrilling adventures. ',
        tag: 'Tourist'
    },
    // {
    //     id: 4,
    //     image: '/images/blog/4.jpg',
    //     date: '13th March 2024',
    //     title: 'My Story When I Backpacked Around The World',
    //     desc: 'This is required when, for example, the final text is not yet available.',
    //     tag: 'Flight'
    // },
    // {
    //     id: 5,
    //     image: '/images/blog/5.jpg',
    //     date: '5th May 2024',
    //     title: 'Organization of accounting at the enterprise',
    //     desc: 'This is required when, for example, the final text is not yet available.',
    //     tag: 'Arab'
    // },
    // {
    //     id: 6,
    //     image: '/images/blog/6.jpg',
    //     date: '19th June 2024',
    //     title: 'Three of the Best Day Trips to Make from Francisco',
    //     desc: 'This is required when, for example, the final text is not yet available.',
    //     tag: 'Dubai'
    // },
    // {
    //     id: 7,
    //     image: '/images/blog/7.jpg',
    //     date: '20th June 2024',
    //     title: 'Why Do People Travel ? Reasons People Travel in 2023',
    //     desc: 'This is required when, for example, the final text is not yet available.',
    //     tag: 'Maldivas'
    // },
    // {
    //     id: 8,
    //     image: '/images/blog/8.jpg',
    //     date: '31st Aug 2024',
    //     title: 'Jungles In Australia: Vermont’s Rugged, Retro Ski Mountain',
    //     desc: 'This is required when, for example, the final text is not yet available.',
    //     tag: 'News'
    // },
    // {
    //     id: 9,
    //     image: '/images/blog/9.jpg',
    //     date: '1st Sep 2024',
    //     title: 'Traveller Visiting Ice Cave With Amazing Eye-catching Scenes',
    //     desc: 'This is required when, for example, the final text is not yet available.',
    //     tag: 'Packages'
    // },
]

export const footerSocial = [
    {
        icon: FiFacebook,
        link: 'https://www.facebook.com/nusapenidaislandtours'
    },
    {
        icon: FiInstagram,
        link: 'https://www.instagram.com/nusapenidaislandtours'
    },
    {
        icon: FaTiktok,
        link: 'https://www.tiktok.com/@nusapenidaislandtours'
    },
]

export const footerCompany = [
    {
        name: 'About us',
        link: '/aboutus'
    },
    {
        name: 'Term & Condition',
        link: '/services'
    },
    {
        name: 'Blog',
        link: '/blogs'
    },

]

export const placeImage = [
    '/images/listing/1.jpg', '/images/listing/2.jpg', '/images/listing/3.jpg', '/images/listing/4.jpg', '/images/listing/5.jpg', '/images/listing/6.jpg', '/images/listing/7.jpg', '/images/listing/8.jpg', '/images/listing/9.jpg', '/images/listing/10.jpg', '/images/listing/11.jpg', '/images/listing/2.jpg', '/images/listing/4.jpg', '/images/listing/4.jpg'
]

export const faqData = [
    {
        id: 1,
        title: 'Is this tour private?',
        desc: 'Yes. You will have your own private car and driver for the entire day.'
    },
    {
        id: 2,
        title: 'Can I customize the itinerary?',
        desc: 'Absolutely. You can add East Nusa Penida or snorkeling sessions. but discuss first with operator maybe need a more payment'
    },
    {
        id: 3,
        title: 'Is it suitable for children or elderly?',
        desc: ' Yes. All locations are accessible without hiking down Kelingking.'
    },
    // {
    //     id: 4,
    //     title: 'What happens when I receive an order ?',
    //     desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    // },
    // {
    //     id: 5,
    //     title: 'How does it work ?',
    //     desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    // },
]

export const tourDetailAbout = [
    {
        icon: FiClock,
        name: 'Duration',
        title: '2 day'
    },
    {
        icon: FiActivity,
        name: 'Type',
        title: 'Adventure'
    },
    {
        icon: FiUsers,
        name: 'Group Size:',
        title: '50 Peoples'
    },
    {
        icon: FiGlobe,
        name: 'Languages',
        title: 'English'
    },
    {
        icon: FiDollarSign,
        name: '$50 / Person',
        title: '1 Day'
    },
]

export const teamData = [
    {
        image: '/images/client/04.jpg',
        name: 'Jack John',
        possition: 'Agent'
    },
    {
        image: '/images/client/05.jpg',
        name: 'Krista John',
        possition: 'Agent'
    },
    {
        image: '/images/client/06.jpg',
        name: 'Roger Jackson',
        possition: 'Agent'
    },
    {
        image: '/images/client/07.jpg',
        name: 'Johnny English',
        possition: 'Agent'
    },
]

export const paymentData = [
    {
        image: '/images/payments/visa.jpg',
        title: 'Visa ending in 4578',
        date: 'Expires in 13/03/2024'
    },
    {
        image: '/images/payments/american-express.jpg',
        title: 'American Express ending in 4578',
        date: 'Expires in 05/05/2024'
    },
    {
        image: '/images/payments/discover.jpg',
        title: 'Discover ending in 4578',
        date: 'Expires in 19/06/2024'
    },
    {
        image: '/images/payments/mastercard.jpg',
        title: 'Master Card ending in 4578',
        date: 'Expires in 20/06/2024'
    },
]

export const userSocialData = [
    {
        icon: FiTwitter,
        name: 'Twitter',
        placeHolder: 'Twitter Profile Name',
        desc: 'Add your Twitter username (e.g. jesus).'
    },
    {
        icon: FiFacebook,
        name: 'Facebook',
        placeHolder: 'Facebook Profile Name',
        desc: 'Add your Facebook username (e.g. jesus).'
    },
    {
        icon: FiInstagram,
        name: 'Instagram',
        placeHolder: 'Instagram Profile Name',
        desc: 'Add your Instagram username (e.g. jesus).'
    },
    {
        icon: FiLinkedin,
        name: 'Linkedin',
        placeHolder: 'Linkedin Profile Name',
        desc: 'Add your Linkedin username (e.g. jesus).'
    },
    {
        icon: FiYoutube,
        name: 'Youtube',
        placeHolder: 'Youtube url',
        desc: 'Add your Youtube url.'
    },
]

export const helpAbout = [
    {
        icon: FiHelpCircle,
        title: 'FAQs',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        link: '/helpcenter-faqs'
    },
    {
        icon: FiBookmark,
        title: 'Guides / Support',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        link: '/helpcenter-guides'
    },
    {
        icon: FiSettings,
        title: 'Support Request',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        link: '/helpcenter-support'
    },
]

export const guidesData = [
    {
        title: 'Getting started',
        subData: [
            'Deciding to purchase', 'List your space', 'Landing an experience or adventure', 'Top uses questions'
        ]
    },
    {
        title: 'Your calendar',
        subData: [
            'Pricing & availability', 'Booking settings', 'Responding to enquiries & requests', 'Snoozing or deactivating your listing'
        ]
    },
    {
        title: 'Your listings',
        subData: [
            'Updating your listing', 'Neighbourhoods', 'Listing photos & photography', 'Travosy Plus', 'API-connected software'
        ]
    },
    {
        title: 'How payouts work',
        subData: [
            'Getting paid', 'Adding payout info', 'Your payout status', 'Donations', 'Taxes'
        ]
    },
    {
        title: 'Your reservations',
        subData: [
            'Travosy safely', 'Travosy Experiences and Adventures', 'Changing a reservation', 'Cancelling a reservation', 'Long-term reservations'
        ]
    },
    {
        title: 'Reservation help',
        subData: [
            'Help with a reservation or guest', 'Guest cancellations',
        ]
    },
    {
        title: 'Your account',
        subData: [
            'Your profile', 'Account security', 'Identification & verifications', 'Reviews', 'Superhost status'
        ]
    },
]

export const restrictions = [
    'Digital Marketing Solutions for Tomorrow', 'Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand', 'Digital Marketing Solutions for Tomorrow', 'Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand'
]

export const blogSocial = [
    FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiGithub, FiYoutube, FiGitlab
]