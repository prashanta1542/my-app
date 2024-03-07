import Link from "next/link"
import Image from "next/image";
const NavBar = () => {
    return (
        <div className="fixed top-0 w-full z-10">
            <nav className="flex justify-center bg-sky-500 py-4">
                <Link href="/">
                    <p className="uppercase tracking-widest text-white px-4">Home</p>
                </Link>

                <Link href="/menu">
                    <p className="uppercase tracking-widest text-white px-4">Menu</p>
                </Link>

                <Link href="/roasted-beans">
                    <p className="uppercase tracking-widest text-white px-4">Roasted Beans</p>
                </Link>

                <Link href="/events">
                    <p className="uppercase tracking-widest text-white px-4">Events</p>
                </Link>

                <Link href="/about">
                    <p className="uppercase tracking-widest text-white px-4">About</p>
                </Link>

                <Link href="/contact">
                    <p className="uppercase tracking-widest text-white px-4">Contact</p>
                </Link>
            </nav>
        </div>


    );
}
export default NavBar;