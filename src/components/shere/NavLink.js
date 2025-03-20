import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathName = usePathname();
    return (
        <Link
            href={href}
            className={pathName == href ? "text-blue-500 font-bold" : "hover:text-gray-400"}>
            {children}
        </Link>
    );
};

export default NavLink;
