import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const navItems = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Work", route: "/work" },
    { name: "Contact", route: "/contact" },
];


export default function Navbar() {

    const router = useLocation();

    const [location, setLocation] = useState("");

    useEffect(() => {
        setLocation(router.pathname);
    }, [router]);




    return (
        <nav className="bg-transparent absolute flex justify-evenly items-center w-full">
            <div id="logo" className="text-white font-bold">
                Logo
            </div>
            <ul className="flex gap-5 text-purple-400 text-[.5rem]">
                {
                    navItems.map((item) => {
                        return (
                            <li
                                key={item.route}>
                                <Link to={item.route} className={location === item.route ? "border-b-2 border-purple-400" : ""}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
