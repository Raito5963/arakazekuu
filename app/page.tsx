import Image from 'next/image';

export default function Page() {
  return (
    <>
      <div className='homeImg'>
        <Image src="/home.png" alt="Home Image" height={108} width={192} />{/* 9:16 */}
      </div>
      <div className='homeAbout'>
        {/* PCの時は改行せず、画像と紹介文を並べる。紹介文は縦書き。スマホの時は改行して、紹介文、画像の順で縦に並べる。紹介文は横書き。 */}
        <Image src="/arakazekuu1.png" alt="嵐風くう 立ち絵" height={580} width={430} />{/* 43:58 */}
        <p>空の管理人</p>
        <p>嵐風くう</p>
        <p>ärakaze kuü</p>{/* 少し透明にして、縦書きの時は横向きになるように。 */}
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
          <input type='button' value='プロフィール' />
        </div>
        <div className='homeMovie'>{/* Youtubeの最新の動画から3つ取得するコンポーネントを張る。 */}
          <h2>最新の動画</h2>
        </div>
      </div>
    </>
  );
}