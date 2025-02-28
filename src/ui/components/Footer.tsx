import Link from "next/link";
import Image from "next/image";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { ChannelSelect } from "./ChannelSelect";
import { ChannelsListDocument, MenuGetBySlugDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";

export async function Footer({ channel }: { channel: string }) {
    const footerLinks = await executeGraphQL(MenuGetBySlugDocument, {
        variables: { slug: "footer", channel },
        revalidate: 60 * 60 * 24,
    });
    const channels = process.env.SALEOR_APP_TOKEN
        ? await executeGraphQL(ChannelsListDocument, {
                withAuth: false, // disable cookie-based auth for this call
                headers: {
                    // and use app token instead
                    Authorization: `Bearer ${process.env.SALEOR_APP_TOKEN}`,
                },
            })
        : null;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-neutral-300 bg-neutral-50">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="flex flex-col justify-between border-t border-neutral-200 py-10 sm:flex-row">
                    <p className="text-sm text-neutral-500">Copyright &copy; {currentYear} PC and More Inc.</p>
                    <nav className="flex space-x-4">
                        <Link href={`/${channel}/about-us`} className="text-sm text-neutral-500 hover:text-neutral-700">
                            About Us
                        </Link>
                        <Link href={`/${channel}/contact`} className="text-sm text-neutral-500 hover:text-neutral-700">
                            Contact
                        </Link>
                        <Link href={`/${channel}/privacy-policy`} className="text-sm text-neutral-500 hover:text-neutral-700">
                            Privacy Policy
                        </Link>
                        <Link href={`/${channel}/terms-of-service`} className="text-sm text-neutral-500 hover:text-neutral-700">
                            Terms of Service
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
