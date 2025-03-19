"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter()
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <button onClick={() =>router.push("/")} className="text-2xl font-bold">
          Cycle Bazar
        </button>

        {/* Menu Items */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/products" className="hover:text-gray-400">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-gray-400">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/counter" className="hover:text-gray-400">
              Counter
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:text-gray-400">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-400">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
