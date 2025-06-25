import './../style/header.css';

interface HeaderProps {
    onNavigate: (url: string) => void; // 追加: ルーティング関数を受け取る
}

export default function Header({ onNavigate }: HeaderProps) { // Props を受け取る
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
                        <a href="/home" onClick={(e) => { e.preventDefault(); onNavigate('/home'); }}>Home</a>
                    </li>
                    <li>
                        <a href="/sns" onClick={(e) => { e.preventDefault(); onNavigate('/sns'); }}>SNS</a>
                    </li>
                    <li>
                        <a href="/news" onClick={(e) => { e.preventDefault(); onNavigate('/news'); }}>News</a>
                    </li>
                    <li>
                        <a href="/gallery" onClick={(e) => { e.preventDefault(); onNavigate('/gallery'); }}>Gallery</a>
                    </li>
                    <li>
                        <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('/contact'); }}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
