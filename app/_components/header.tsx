import './../style/header.css';
import Image from 'next/image';

export default function Header() {
    return (
        <header>
            <Image 
                src="/header.png" 
                alt="Header Image" 
                height={125} 
                width={222} 
                style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
                />{/* 125:222 */}
            <nav style={{ display: 'flex', justifyContent: 'center' }}>
                <ul>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/News">News</a>
                    </li>
                    <li>
                        <a href="/Gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="/SNS">SNS</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}