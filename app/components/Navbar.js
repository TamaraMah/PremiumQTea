import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/products"><a>Products</a></Link></li>
                <li><Link href="/about"><a>About Us</a></Link></li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>

            <style jsx>{`
                nav {
                    background-color: #4CAF50;
                    padding: 1em;
                }
                ul {
                    list-style: none;
                    display: flex;
                    justify-content: center;
                }
                li {
                    margin-right: 20px;
                }
                a {
                    color: white;
                    text-decoration: none;
                }
            `}</style>
        </nav>
    );
}
