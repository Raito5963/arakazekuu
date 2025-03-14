import Image from 'next/image';
import Youtube from './_components/youtube';
import SNS from './_components/sns';
import Gallery from './_components/gallery';
import './style/home.css';
import './style/globals.css';

export default function Page() {
  return (
    <>
      <div className='homeAbout'>
        {/* PCの時は改行せず、画像と紹介文を並べる。紹介文は縦書き。スマホの時は改行して、紹介文、画像の順で縦に並べる。紹介文は横書き。 */}
        <Image src="/arakazekuu1.png" alt="嵐風くう 立ち絵" height={580} width={430} />{/* 43:58 */}
        <h4 className='subname'>ärakaze kuü</h4>{/* 少し透明にして、縦書きの時は横向きになるように。 */}
        <h3 className='name'>嵐風くう</h3>
        <h1 className='job'>空の管理人</h1>
      </div>
      <div className='homeIntroduction'>
        <h1>歌ってみた</h1>
        <div className='homeMovie'>{/* Youtubeの最新の動画から3つ取得するコンポーネントを張る。 */}
          <Youtube channelId='UCaLgv1tEgzejX4FuO3NLPoQ' />
        </div>
      </div>
      <SNS />
      <Gallery />
    </>
  );
}