
import basicImg from '../../images/home/stays_teaser/stay-3.webp';
import silverImg from '../../images/packages/silver.webp';
import goldImg from '../../images/packages/gold.webp';
import diamondImg from '../../images/packages/diamond.webp';
import platinumImg from '../../images/packages/platinum.webp';
import vvipImg from '../../images/packages/vvip.webp';

export const packageData = {
    basic: {
        id: 'basic',
        title: "Dormitory",
        hotels: "Dormitory Stay",
        amenities: ["Shared Bunk Bed", "Common Washroom", "Heating", "Hot Water", "Wi-Fi"],
        description: "Perfect for solo travelers and those on a budget. Meet like-minded adventurers in our cozy, heated dormitory.",
        inclusion: "Group Lessons, Standard Gear",
        priceSki: 20999,
        priceBoard: 29999,
        image: basicImg,
        badge: "Beginner",
        badgeColor: "bg-white/20 text-white border-white/20 backdrop-blur-md", // Custom badge style
        borderColor: "border-slate-200"
    },
    silver: {
        id: 'silver',
        title: "2 Star",
        hotels: "Hotel Lala / ZamZam",
        amenities: ["Double Bed", "Private Bathroom", "Heating", "Hot Water", "Breakfast & Dinner"],
        description: "Comfortable private rooms with all essentials. A great balance of privacy and value.",
        inclusion: "Phase 1 Pass, Personal Instructor",
        priceSki: 23999,
        priceBoard: 37999,
        image: silverImg,
        badge: "Value",
        badgeColor: "bg-alpine-blue text-white",
        borderColor: "border-sky-200"
    },
    gold: {
        id: 'gold',
        title: "3 Star (Standard)",
        hotels: "Mama Palace / Gulmarg Inn",
        amenities: ["King/Twin Bed", "En-suite Bathroom", "Central Heating", "Mountain View", "All Meals"],
        description: "Upgrade your stay with better amenities, central heating, and delicious full-board meals.",
        inclusion: "All Meals, Performance Gear",
        priceSki: 27999,
        priceBoard: 46999,
        image: goldImg,
        badge: "Popular",
        badgeColor: "bg-amber-500 text-white",
        borderColor: "border-blue-200"
    },
    diamond: {
        id: 'diamond',
        title: "3 Star (Premium)",
        hotels: "Royal Park / Khaleel Palace",
        amenities: ["Premium Room", "Modern Interiors", "Central Heating", "Lounge Access", "Buffet Meals"],
        description: "Premium comfort with modern interiors and excellent service. Experience Gulmarg in style.",
        inclusion: "4-Star Stay, Private Guide",
        priceSki: 31999,
        priceBoard: 55999,
        image: diamondImg,
        badge: "Luxury",
        badgeColor: "bg-indigo-500 text-white",
        borderColor: "border-indigo-200"
    },
    platinum: {
        id: 'platinum',
        title: "4 Star (Standard)",
        hotels: "Grand Mumtaz / Himalayan Pearl",
        amenities: ["Luxury Suite", "Room Service", "Spa Access", "Central Heating", "Gourmet Dining"],
        description: "Luxury accommodations with top-tier facilities including spa access and gourmet dining options.",
        inclusion: "Luxury Transport, Pro Race Gear",
        priceSki: 43999,
        priceBoard: 97999,
        image: platinumImg,
        badge: "Premium",
        badgeColor: "bg-slate-800 text-white",
        borderColor: "border-slate-300"
    },
    platinum_plus: {
        id: 'platinum_plus',
        title: "4 Star (Premium)",
        hotels: "Hotel Hilltop / Green Resort / Pride Resort",
        amenities: ["Premium Suites", "Ski-in/Ski-out", "Luxury Spa", "Valet Service"],
        description: "The ultimate mountain experience with premium 4-star resorts offering valet service and luxury spas.",
        inclusion: "VIP Transport, Elite Gear",
        priceSki: 65999,
        priceBoard: 120999,
        image: platinumImg,
        badge: "Elite",
        badgeColor: "bg-purple-600 text-white",
        borderColor: "border-purple-300"
    },
    royal: {
        id: 'royal',
        title: "5 Star",
        hotels: "The Khyber Resort and Spa",
        amenities: ["World Class Luxury", "Panoramic Pools", "5-Star Dining", "Butler Service"],
        description: "The pinnacle of luxury in Gulmarg. Stay at the world-renowned Khyber Resort.",
        inclusion: "Helicopter Transfer Option, Celebrity Guide",
        priceSki: 0, // 0 = Price on Request
        priceBoard: 0,
        image: vvipImg,
        badge: "The Best",
        badgeColor: "bg-amber-400 text-white text-shadow-sm",
        borderColor: "border-amber-400 shadow-amber-100" // Special Gold Border
    }
};
