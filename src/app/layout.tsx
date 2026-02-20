import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Microsoft Intune Training | Endpoint Administrator",
        template: "%s | Intune Training",
    },
    description:
        "Interactive training platform for Microsoft Intune - Learn Endpoint Management, Device Enrollment, App Deployment, Security Baselines, and Windows Autopilot.",
    keywords: [
        "Microsoft Intune",
        "Endpoint Manager",
        "Device Management",
        "Windows Autopilot",
        "App Deployment",
        "Conditional Access",
        "Endpoint Security",
        "MD-102",
        "Training",
    ],
    authors: [{ name: "Maheshwar" }],
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Microsoft Intune Training | Endpoint Administrator",
        description:
            "Interactive training for Microsoft Intune Endpoint Management, Device Enrollment, and Security.",
        siteName: "Intune Training",
    },
    twitter: {
        card: "summary_large_image",
        title: "Microsoft Intune Training",
        description:
            "Interactive training for Microsoft Intune Endpoint Management, Device Enrollment, and Security.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-gray-100 min-h-screen`}
            >
                {children}
            </body>
        </html>
    );
}
