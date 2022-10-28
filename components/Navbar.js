import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="text-gray-900 text-2xl font-medium z-20 relative">
            <ul className="flex gap-12">
                <Link href={"/"}>
                    <li>Home</li>
                </Link>
                <Link href={"/work"}>
                    <li>Work</li>
                </Link>
                <Link href={"/about"}>
                    <li>About</li>
                </Link>
                <Link href={"/contact"}>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}