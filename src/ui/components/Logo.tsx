"use client";

import { usePathname } from "next/navigation";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import Link from "next/link"; // Import Link from next/link

const companyName = "PCandMore"; // Updated company name

export const Logo = () => {
    const pathname = usePathname();

    if (pathname === "/") {
        return (
            <h1 className="flex items-center font-bold" aria-label="homepage">
                {companyName}
            </h1>
        );
    }
    return (
        <div className="flex items-center font-bold">
            <Link href="/" aria-label="homepage">
                {companyName}
            </Link>
        </div>
    );
};
