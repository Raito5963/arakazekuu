import './../style/header.css';
import { useState, useEffect, useRef } from 'react';

interface HeaderProps {
    onNavigate: (url: string) => void; // 追加: ルーティング関数を受け取る
}

export default function Header({ onNavigate }: HeaderProps) { // Props を受け取る
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigate = (url: string) => {
        onNavigate(url);
        setIsMenuOpen(false); // メニューを閉じる
    };

    // メニュー外をクリックした時にメニューを閉じる
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header ref={menuRef}>
            <nav>
                {/* ハンバーガーメニューボタン（スマホ用） */}
                <button 
                    className="hamburger-button"
                    onClick={toggleMenu}
                    aria-label="メニューを開く"
                >
                    <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                </button>

                {/* デスクトップメニュー */}
                <ul className="desktop-menu">
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

                {/* スマホメニュー */}
                <ul className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <li>
                        <a href="/home" onClick={(e) => { e.preventDefault(); handleNavigate('/home'); }}>Home</a>
                    </li>
                    <li>
                        <a href="/sns" onClick={(e) => { e.preventDefault(); handleNavigate('/sns'); }}>SNS</a>
                    </li>
                    <li>
                        <a href="/news" onClick={(e) => { e.preventDefault(); handleNavigate('/news'); }}>News</a>
                    </li>
                    <li>
                        <a href="/gallery" onClick={(e) => { e.preventDefault(); handleNavigate('/gallery'); }}>Gallery</a>
                    </li>
                    <li>
                        <a href="/contact" onClick={(e) => { e.preventDefault(); handleNavigate('/contact'); }}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
