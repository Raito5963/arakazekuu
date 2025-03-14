import './../style/youtube.css';
import './../style/globals.css';
import './../style/gallery.css';
import Image from 'next/image';

export default function Sns() {
    return (
        <>
            <div className='gallery' style={{ textAlign: 'center' }}>
                <h1>SNS</h1>
                <p>嵐風くうのSNSを紹介します。</p>
                <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', textAlign: 'center' ,alignItems: 'center' ,gap: '10px'}}>
                    <Image
                        src='/youtubeIcon.jpg'
                        alt='YouTubeアイコン'
                        height={100}
                        width={100}
                        style={{
                            borderRadius: '50%',
                        }}
                    />
                    <a
                        href='https://www.youtube.com/channel/UCaLgv1tEgzejX4FuO3NLPoQ'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ fontSize: '20px' }}
                    >
                        嵐風くう YouTubeチャンネル
                    </a>
                </div>
            </div>

        </>

    );
}