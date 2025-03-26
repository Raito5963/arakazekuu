// app/page.tsx
import Image from 'next/image';
import Youtube from './../_components/youtube';
import './../style/home.css';
import './../style/globals.css';

export default function Page() {
  return (
    <>
      <div className='homeAbout'>
        <Image src="/arakazekuu1.png" alt="嵐風くう 立ち絵" height={580} width={430} style={{WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',}}/>
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
    </>
  );
}
