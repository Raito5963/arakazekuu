import './../style/youtube.css';
import './../style/globals.css';
import './../style/gallery.css';
import './../style/home.css'; // 追加のCSSファイル
import Image from 'next/image';

export default function Sns() {
    return (
        <>
            <div className='gallery' style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto', background: '#fff', borderRadius: '1.5rem', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '2.5rem 1.5rem', marginTop: '3rem' }}>
                <h1 style={{ fontSize: '2.2rem', marginBottom: '1.2rem', letterSpacing: '0.05em', color: '#1d3557' }}>SNS</h1>
                <p style={{ color: '#555', marginBottom: '2.5rem', fontSize: '1.1rem' }}>嵐風くうのSNSを紹介します。</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: '#f8fafc', borderRadius: '1rem', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', padding: '1.5rem 2rem', width: '100%', maxWidth: 350 }}>
                        <Image
                            src='/youtubeIcon.jpg'
                            alt='YouTubeアイコン'
                            height={70}
                            width={70}
                            style={{
                                borderRadius: '50%',
                                WebkitUserSelect: 'none',
                                MozUserSelect: 'none',
                                msUserSelect: 'none',
                                userSelect: 'none',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                            }}
                        />
                        <a
                            href='https://www.youtube.com/channel/UCaLgv1tEgzejX4FuO3NLPoQ'
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{ fontSize: '1.15rem', color: '#e63946', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.01em' }}
                        >
                            YouTubeチャンネル
                        </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: '#f8fafc', borderRadius: '1rem', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', padding: '1.5rem 2rem', width: '100%', maxWidth: 350 }}>
                        <Image
                            src='/Xicon.jpg'
                            alt='Xアイコン'
                            height={70}
                            width={70}
                            style={{
                                borderRadius: '50%',
                                WebkitUserSelect: 'none',
                                MozUserSelect: 'none',
                                msUserSelect: 'none',
                                userSelect: 'none',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                            }}
                        />
                        <a
                            href='https://x.com/arakaze_kuu'
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{ fontSize: '1.15rem', color: '#1d9bf0', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.01em' }}
                        >
                            X（旧Twitter）
                        </a>
                    </div>
                </div>
            </div>

        </>

    );
}