
import './../style/home.css';
import './../style/gallery.css';
import './../style/home.css'; // 追加のCSSファイル

export default function Gallery() {
    return (
        <div style={{ marginBottom: '10rem' }}>
            <div className='gallery'>
                <h1>Gallery</h1>
                <p>嵐風くうのイラストや、制作にかかわってくれた方を紹介します。</p>
            </div>
        </div>
    );
}