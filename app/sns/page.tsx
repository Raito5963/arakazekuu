import Youtube from './../_components/youtube';
import './../style/youtube.css';
import './../style/home.css';

export default function Sns() {
    return (
        <div className='youtube' style={{ textAlign: 'center' }}>
            <h1>Youtube</h1>
            <a 
                href='https://www.youtube.com/channel/UCaLgv1tEgzejX4FuO3NLPoQ' 
                target='_blank' 
                rel='noopener noreferrer'
                style={{ marginTop: '20px'}}
                >
                嵐風くう YouTubeチャンネル
            </a>
            <div className='videoList'>
                <Youtube channelId='UCaLgv1tEgzejX4FuO3NLPoQ' />
            </div>
        </div>
    );
}