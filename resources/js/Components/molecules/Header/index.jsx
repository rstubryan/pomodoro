import { Container } from "@/Components/templates/Container.jsx";
import { Heading } from "@/Components/atoms/Typography/index.jsx";
import { ThemeProvider } from "@/Components/theme-provider.jsx";
import { Link } from "@inertiajs/react";
import { ModeToggle } from "@/Components/mode-toggle.jsx";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/user-auth";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

export default function Header() {
    const userAuth = useAuth();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navList = [
        {
            title: userAuth ? `Hi, ${userAuth.name}` : "Login",
            href: userAuth ? "/dashboard" : "/login",
        },
    ];

    return (
        <div className="border-b shadow-sm">
            <Container className="my-5 items-center lg:flex lg:justify-between">
                <div className="flex items-center justify-between">
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
                        className={`lg:flex ${isMenuOpen ? "grid" : "hidden"} mt-5 lg:mt-0 lg:items-center lg:gap-5`}
                    >
                        <ul className="grid items-center gap-5 lg:flex">
                            {navList.map((navItem, index) => (
                                <li key={index}>
                                    {userAuth ? (
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                {navItem.title}
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuLabel>
                                                    <Link href={navItem.href}>
                                                        Dashboard
                                                    </Link>
                                                </DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <Link href="/profile">
                                                        Profile
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Link
                                                        method="post"
                                                        href={route("logout")}
                                                    >
                                                        Log Out
                                                    </Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    ) : (
                                        <Link href={navItem.href}>
                                            {navItem.title}
                                        </Link>
                                    )}
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
