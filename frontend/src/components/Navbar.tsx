import { Link, useLocation } from "react-router-dom";
import { MessageCircle, Home, BookOpen, User } from "lucide-react";
import logo from '../assets/logohero.webp';

const Navbar = () => {
    const location = useLocation();
    const activePath = location.pathname;

    const navItems = [
        { name: "Chat Global", path: "/chat", icon: <MessageCircle size={18} /> },
        { name: "Home", path: "/", icon: <Home size={18} /> },
        { name: "Baca Quran", path: "/quran", icon: <BookOpen size={18} /> },
        { name: "Profile", path: "/profile", icon: <User size={18} /> },
    ];

    return (
        <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-sm">

            {/* Logo */}
            <div className="flex items-center gap-1">
                <img
                    src={logo}
                    alt="logo"
                    className="w-12 rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:rotate-3 hover:shadow-md cursor-pointer"
                />


                <span className="font-semibold cursor-pointer text-blue-600 text-lg ml-0">Mufadz App</span>
            </div>

            {/* Menu */}
            <ul className="flex items-center space-x-6">
                {navItems.map((item) => {
                    const isActive = activePath === item.path;

                    return (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className={`flex items-center space-x-1 cursor-pointer p-3 rounded-lg transition-all duration-200 font-semibold
                                    ${isActive
                                        ? "bg-blue-50 text-blue-600 hover:-translate-y-[2px] hover:shadow-sm hover:bg-blue-100"
                                        : "text-gray-600 hover:bg-blue-50 hover:-translate-y-[2px] hover:shadow-sm"
                                    }`}
                            >
                                {item.icon}
                                <span className="text-sm">{item.name}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
