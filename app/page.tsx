import Image from 'next/image';
import Youtube from './_components/youtube';
import './style/home.css';

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
        {/* ここはmapでPCとスマホで行数を変える。  */}
        <h2>自己紹介</h2>
        <div className='homeGrid'>
          <div className='box'>
            <h3>名前</h3>
            <p>嵐風くう</p>
          </div>
          <div className='box'>
            <h3>年齢</h3>
            <p>19歳</p>
          </div>
          <div className='box'>
            <h3>誕生日</h3>
            <p>2月9日</p>
          </div>
          <div className='box'>
            <h3>身長</h3>
            <p>178cm</p>
          </div>
          <div className='box'>
            <h3>体重</h3>
            <p>58kg</p>
          </div>
          <div className='box'>
            <h3>血液型</h3>
            <p>AB型</p>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <a className='no' href="/about">
            <input type='button' value='プロフィールを見る' />
          </a>
        </div>
        <div className='homeMovie'>{/* Youtubeの最新の動画から3つ取得するコンポーネントを張る。 */}
          <h2>最新の動画</h2>
          <Youtube channelId='UCaLgv1tEgzejX4FuO3NLPoQ' />
        </div>
        人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは、自由、正義および平和の世界を実現するために不可欠である。
        人権は、人間の尊厳を尊重し、人間の自由と平等を保障するために、法律として保護されなければならない。
      </div>
    </>
  );
}