import Link from "next/link";
import Image from "next/image";

const SideNav = () => {
    return (
        <div>
            <div className="fixed left-0 top-10 h-full">
                <nav className="flex-col align-baseline min-h-screen bg-sky-500 py-4">
                    <Link href="/">
                        <p className="uppercase tracking-widest p-3 border-t-2 border-b-2  text-white px-4">Home</p>
                    </Link>

                    <Link href="/menu">
                        <p className="uppercase tracking-widest p-3 border-b-2 text-white px-4">Menu</p>
                    </Link>

                    <Link href="/roasted-beans">
                        <p className="uppercase tracking-widest p-3 border-b-2 text-white px-4">Roasted Beans</p>
                    </Link>

                    <Link href="/events">
                        <p className="uppercase tracking-widest p-3 border-b-2 text-white px-4">Events</p>
                    </Link>

                    <Link href="/about">
                        <p className="uppercase tracking-widest p-3 border-b-2 text-white px-4">About</p>
                    </Link>

                    <Link href="/contact">
                        <p className="uppercase tracking-widest p-3 border-b-2 text-white px-4">Contact</p>
                    </Link>
                </nav>
            </div>

            <div className="fixed right-0 top-10 h-full">
                <nav className="flex-col align-baseline min-h-screen bg-sky-500 py-4">
                    <Link href="/">
                        <p className="uppercase tracking-widest p-3 border-t-2 border-b-2  text-white px-4">Home</p>
                    </Link>

                    <Link href="/menu">
                        <p className="uppercase tracking-widest p-3 border-b-2 text-white px-4">Menu</p>
                    </Link>

                    <Link href="/roasted-beans">
                        <p className="uppercase tracking-widest p-3 border-b-2 text-white px-4">Roasted Beans</p>
                    </Link>

                    <Link href="/events">
                        <p className="uppercase tracking-widest p-3 border-b-2 text-white px-4">Events</p>
                    </Link>

                    <Link href="/about">
                        <p className="uppercase tracking-widest p-3 border-b-2 text-white px-4">About</p>
                    </Link>

                    <Link href="/contact">
                        <p className="uppercase tracking-widest p-3 border-b-2 text-white px-4">Contact</p>
                    </Link>
                </nav>
            </div>
        </div>

    );
}
export default SideNav;