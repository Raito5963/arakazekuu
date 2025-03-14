import './../style/home.css';
import './../style/about.css';
import './../style/globals.css';import Image from 'next/image';

export default function Page() {
    return (
        <div className='aboutPage'>
            <div className='aboutIntroduction'>
                <h1>自己紹介</h1>
            </div>
            <div className='about'>
                <Image src="/arakazekuu1.png" alt="嵐風くう 立ち絵" height={580} width={430} />{/* 43:58 */}
                <div
                    className='aboutTxt'
                    style={{ textAlign: 'center' }}
                >
                    <h1>嵐風くう</h1>
                    <p>
                        「嵐風」は、風神と雷神のように猛々しくもありながら、時に爽やかさを感じさせる力強さを持っている。
                        また、「嵐」は君を、「風」は僕を指し、一緒に大きな風を起こして幸せになろうという意味も込められている。
                        「くう」には空の意味があり、嵐になったり晴れになったりと、さまざまな表情を見せるつかみどころのない存在である。
                    </p>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <div className='aboutGrid' >
                    <div className='box'>
                        <h3>ファンネーム</h3>
                        <p>風の子</p>
                    </div>
                    <div className='box'>
                        <h3>一人称</h3>
                        <p>僕</p>
                    </div>
                    <div className='box'>
                        <h3>職業</h3>
                        <p>空の管理人</p>
                    </div>
                    <div className='box'>
                        <h3>利き手</h3>
                        <p>左手</p>
                    </div>
                    <div className='box'>
                        <h3>口癖</h3>
                        <p>「任せなさい！」</p>
                    </div>
                    <div className='box'>
                        <h3>特技</h3>
                        <p>歌を歌う</p>
                        <p>楽しいことを考える</p>
                    </div>
                    <div className='box'>
                        <h3>趣味</h3>
                        <p>みんなの楽しむ姿を見る</p>
                    </div>
                    <div className='box'>
                        <h3>好きな食べ物</h3>
                        <p>わたがし（雲に似てるから）</p>
                        <p>みずあめ（海や水に似てるから）</p>
                    </div>
                    <div className='box'>
                        <h3>嫌いな食べ物</h3>
                        <p>とうもろこし</p>
                        </div>
                    <div className='box'>
                        <h3>好きなこと</h3>
                        <p>歌を歌う</p>
                    </div>
                    <div className='box'>
                        <h3>嫌いなこと</h3>
                        <p>何かを強制されること</p>
                    </div>
                    <div className='box'>
                        <h3>自分を動物に例えると</h3>
                        <p>猫</p>
                    </div>
                </div>
            </div>
        </div>
    );
}