import './../style/youtube.css';
import './../style/gallery.css';


export default function Sns() {
    return (
        <>
            <div className='gallery' style={{ textAlign: 'center' }}>
                <h1>SNS</h1>
                <p>嵐風くうのSNSを紹介します。</p>
                <li>
                    <a
                        href='https://www.youtube.com/channel/UCaLgv1tEgzejX4FuO3NLPoQ'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ marginTop: '20px' }}
                    >
                        嵐風くう YouTubeチャンネル
                    </a>
                </li>

            </div>

        </>

    );
}