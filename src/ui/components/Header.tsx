import { Logo } from "./Logo";
import { Nav } from "./nav/Nav";
import Link from "next/link";
import { BotIcon } from "lucide-react"; // Import the AI icon

export function Header({ channel }: { channel: string }) {
    return (
        <header className="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-3 sm:px-8">
                <div className="flex h-16 justify-between items-center gap-4 md:gap-8">
                    <Logo />
                    <Nav channel={channel} />
                    {/* AI Icon */}
                    <Link
                        href={`/${channel}/chatbot`}
                        className="flex items-center justify-center w-10 h-10 text-black hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                        aria-label="Chatbot"
                    >
                        <BotIcon className="h-6 w-6" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
