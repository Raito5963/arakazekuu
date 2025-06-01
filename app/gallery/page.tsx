import './../style/gallery.css';
import Image from 'next/image';

export default function Gallery() {
    return (
        <div style={{ marginBottom: '10rem' }}>
            <div className='gallery'>
                <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Gallery</h1>
                <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    嵐風くうのイラストや、制作にかかわってくれた方を紹介します。
                </p>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2.5rem',
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: '600px',
                        margin: '0 auto',
                    }}
                >
                    {/* hitaguro様 */}
                    <div
                        style={{
                            padding: '2rem 1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            background: '#f8fafc',
                            borderRadius: '1.5rem',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                            width: '100%',
                        }}
                    >
                        <Image
                            src='/hitaguro.jpg'
                            alt='hitaguro様'
                            height={100}
                            width={100}
                            style={{
                                borderRadius: '50%',
                                marginBottom: '1rem',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                WebkitUserSelect: 'none',
                                MozUserSelect: 'none',
                                msUserSelect: 'none',
                                userSelect: 'none',
                            }}
                        />
                        <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem' }}>hitaguro 様</h2>
                        <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <a
                                href='https://x.com/ht_blk'
                                target='_blank'
                                rel='noopener noreferrer'
                                style={{ fontSize: '1rem', color: '#1d9bf0', textDecoration: 'none' }}
                            >
                                X（旧Twitter）
                            </a>
                            <a
                                href='https://www.instagram.com/htgr_blk/'
                                target='_blank'
                                rel='noopener noreferrer'
                                style={{ fontSize: '1rem', color: '#1d9bf0', textDecoration: 'none' }}
                            >
                                インスタグラム
                            </a>
                        </div>
                    </div>
                    {/* 482studio様 */}
                    <div
                        style={{
                            padding: '2rem 1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            background: '#f8fafc',
                            borderRadius: '1.5rem',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                            width: '100%',
                        }}
                    >
                        <Image
                            src='/482studio.png'
                            alt='482studio 様'
                            height={100}
                            width={100}
                            style={{
                                borderRadius: '50%',
                                marginBottom: '1rem',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                WebkitUserSelect: 'none',
                                MozUserSelect: 'none',
                                msUserSelect: 'none',
                                userSelect: 'none',
                            }}
                        />
                        <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem' }}>482studio 様</h2>
                        <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <a
                                href='http://482studio.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                                style={{ fontSize: '1rem', color: '#1d9bf0', textDecoration: 'none' }}
                            >
                                公式HP（準備中）
                            </a>
                            <a
                                href='https://x.com/482_studio'
                                target='_blank'
                                rel='noopener noreferrer'
                                style={{ fontSize: '1rem', color: '#1d9bf0', textDecoration: 'none' }}
                            >
                                X（旧Twitter）
                            </a>
                            <a
                                href='https://www.instagram.com/482studio_osaka'
                                target='_blank'
                                rel='noopener noreferrer'
                                style={{ fontSize: '1rem', color: '#1d9bf0', textDecoration: 'none' }}
                            >
                                インスタグラム（準備中）
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}