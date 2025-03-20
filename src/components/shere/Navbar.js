"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavLink from "./Navlink";

const Navbar = () => {
    const router = useRouter();
    return (
        <nav className='bg-gray-900 text-white py-4 px-6 shadow-md'>
            <div className='container mx-auto flex justify-between items-center'>
                {/* Logo */}
                <button
                    onClick={() => router.push("/")}
                    className='text-2xl font-bold'>
                    Cycle Bazar
                </button>

                {/* Menu Items */}
                <ul className='flex space-x-6'>
                    <li>
                        <NavLink href='/products'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink
                            href='/about-us'
                            className='hover:text-gray-400'>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            href='/gallery'
                            className='hover:text-gray-400'>
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            href='/counter'
                            className='hover:text-gray-400'>
                            Counter
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            href='/dashboard'
                            className='hover:text-gray-400'>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href='/login' className='hover:text-gray-400'>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
