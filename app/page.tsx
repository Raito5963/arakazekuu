// app/page.tsx
import Image from 'next/image';
import Youtube from './_components/youtube';
import SNS from './_components/sns';
import Gallery from './_components/gallery';
import Contact from './_components/contact';
import './style/home.css';
import './style/globals.css';

export default function Page() {
  return (
    <>

      <div className='homeAbout'>
        <div className='background'>
          <video autoPlay loop muted className='background-video'>
            <source src='/background.mp4' type='video/mp4' />
          </video>
        </div>
        <Image src="/arakazekuu1.png" alt="嵐風くう 立ち絵" height={580} width={430} />
        <h4 className='subname'>ärakaze kuü</h4>
        <h3 className='name'>嵐風くう</h3>
        <h1 className='job'>空の管理人</h1>
      </div>
      <div id='movie'>
        <div className='homeIntroduction'>
          <h1>歌ってみた</h1>
          <div className='homeMovie'>
            <Youtube channelId='UCaLgv1tEgzejX4FuO3NLPoQ' />
          </div>
        </div>
      </div>


      {/* SNSセクションに id を追加 */}
      <div id="sns">
        <SNS />
      </div>

      {/* Galleryセクションに id を追加 */}
      <div id="gallery">
        <Gallery />
      </div>

      {/* Contact セクションの例（存在する場合） */}
      <div id="contact" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 4.2rem)", margin: "10px 0", textAlign: "center" }}>Contact</h1>
        <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", margin: "10px 0", textAlign: "center" }}>お仕事のご依頼などはこちらからお願いします。7日以内に回答がない場合はお手数ですがメールを再送して下さい｡</p>
        <Contact />
        {/* Contact の内容をここに記述 */}
      </div>
    </>
  );
}
