import './../style/header.css';

import Image from 'next/image';

export default function Header() {
    return (
        <header>
            <div style={{ textAlign: 'center' }}>
                <a className='no'  href="/">
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
                </a>
            </div>
            <nav style={{ display: 'flex', justifyContent: 'center' }}>
                <ul
                    style={{
                        listStyle: 'none',
                        display: 'flex',
                        gap: '10px',
                        padding: '0',
                        margin: '0',
                    }}>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="/sns">SNS</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}