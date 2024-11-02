import { Link } from "@inertiajs/react";
import { Heading } from "@/Components/atoms/Typography/index.jsx";

export default function Home() {
    const auth = false;
    const navList = [
        {
            title: 'Dashboard',
            href: '/dashboard',
        },
        {
            title: 'Log Out',
            href: '/',
            authRequired: true,
        },
        {
            title: 'Login',
            href: '/login',
            authRequired: false,
        },
    ];

    const filteredNavList = navList.filter(navItem => navItem.authRequired === undefined || navItem.authRequired === auth);

    return (
        <div className={`container flex justify-between items-center`}>
            <Heading className={``}>Pomodoro</Heading>
            <nav className="">
                <ul className="flex gap-3">
                    {filteredNavList.map((navItem, index) => (
                        <li key={index} className="">
                            <Link href={navItem.href} className="">
                                {navItem.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
