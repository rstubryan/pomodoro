import { Container } from "@/Components/templates/Container.jsx";
import { Heading } from "@/Components/atoms/Typography/index.jsx";
import { ThemeProvider } from "@/Components/theme-provider.jsx";
import { Link, usePage } from "@inertiajs/react";
import { ModeToggle } from "@/Components/mode-toggle.jsx";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const url = usePage().url;
    const navList = [
        {
            title: "Dashboard",
            href: "/dashboard",
            active: url === "/dashboard" && true,
            auth: true,
        },
    ];

    return (
        <div className="border-b shadow-sm">
            <Container className="lg:flex lg:justify-between items-center my-5">
                <div className="flex justify-between items-center">
                    <Heading>Workpace</Heading>
                    <div className="lg:hidden">
                        {isMenuOpen ? (
                            <X onClick={() => setIsMenuOpen(false)} />
                        ) : (
                            <Menu onClick={() => setIsMenuOpen(true)} />
                        )}
                    </div>
                </div>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <nav
                        className={`lg:flex ${isMenuOpen ? "grid" : "hidden"} lg:items-center lg:gap-5 mt-5 lg:mt-0`}
                    >
                        <ul className="lg:flex grid gap-5 items-center">
                            {navList.map((navItem, index) => (
                                <li key={index}>
                                    <Link
                                        href={navItem.href}
                                        className={
                                            navItem.active ? "font-bold" : ""
                                        }
                                    >
                                        {navItem.title}
                                    </Link>
                                </li>
                            ))}
                            <ModeToggle />
                        </ul>
                    </nav>
                </ThemeProvider>
            </Container>
        </div>
    );
}
