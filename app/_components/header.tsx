// app/_components/header.tsx
import './../style/header.css';

export default function Header() {
    return (
        <header>
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
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/../sns">SNS</a>
                    </li>
                    <li>
                        <a href="/../gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="/../contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
