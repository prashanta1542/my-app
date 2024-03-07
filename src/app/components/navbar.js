import Link from "next/link"
const NavBar=()=>{
    return(
        <div>
            <Link href="/Menu">
                <p>Home</p>
            </Link>
            
            <Link href="">
                <p>Roasted Beans</p>
            </Link>
            
            <Link href="">
                <p>Events</p>
            </Link>
            
            <Link href="">
                <p>About</p>
            </Link>

            <Link href="">
                <p>Contact</p>
            </Link>

            <Link href="">
                <p>Order Line</p>
            </Link>
        </div>
    )
}
export default NavBar;