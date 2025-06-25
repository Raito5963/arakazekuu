"use client";
import React, { useState } from 'react';
import newsList from '../../newsdata';
import { NewsData } from '../../newsdata/types';

function isPublished(news: NewsData): boolean {
  if (!news.publishAt) return true;
  // UTCミリ秒で厳密比較
  const now = Date.now();
  const publish = Date.parse(news.publishAt);
  return now >= publish;
}

export default function NewsPreview({ count = 3 }: { count?: number }) {
  const [selectedNews, setSelectedNews] = useState<NewsData | null>(null);
  const [imageOverlay, setImageOverlay] = useState<string | null>(null);
  // 公開済みニュースのみ表示
  const publishedNews = newsList.filter(isPublished);
  const sortedNews = [...publishedNews].sort((a, b) => b.id - a.id).slice(0, count);

  function isHeadingBlock(block: any): block is { type: 'h1'|'h2'|'h3'|'h4', value: string, position?: 'left'|'center'|'right' } {
    return (
      block &&
      (block.type === 'h1' || block.type === 'h2' || block.type === 'h3' || block.type === 'h4')
    );
  }

  return (
    <div className='news-preview' style={{maxWidth:'700px',margin:'2rem auto',padding:'1.5rem 1rem',background:'#f8fafc',borderRadius:'1.2rem',boxShadow:'0 2px 12px rgba(0,0,0,0.07)'}}>
      <h2 style={{textAlign:'center',fontSize:'2rem',marginBottom:'1.5rem',fontWeight:'bold'}}>News</h2>
      <div className='news-card-list'>
        {sortedNews.map((news) => (
          <div
            key={news.id}
            className="news-card"
            onClick={() => setSelectedNews(news)}
          >
            <div className="news-card-date">{news.date}</div>
            <div className="news-card-title">{news.title}</div>
            <div className="news-card-summary">
              {news.content.find(c => c.type === 'text')?.value}
            </div>
          </div>
        ))}
      </div>
      <div style={{textAlign:'center',marginTop:'2rem'}}>
        <a href="/news" className="news-readmore-btn">Read More</a>
      </div>
      {/* オーバーレイ表示 */}
      {selectedNews && (
        <div className="news-overlay" onClick={() => setSelectedNews(null)}>
          <div className="news-detail-modal news-detail-modal-scrollable" onClick={e => e.stopPropagation()}>
            <div className="news-detail-date">{selectedNews.date}</div>
            <div className="news-detail-title">{selectedNews.title}</div>
            <div className="news-detail-content">
              {(() => {
                const blocks = selectedNews.content;
                const result = [];
                let i = 0;
                while (i < blocks.length) {
                  if (blocks[i].type === 'image') {
                    const images: string[] = [];
                    let j = i;
                    while (j < blocks.length && blocks[j].type === 'image') {
                      images.push(blocks[j].value);
                      j++;
                    }
                    if (images.length > 1) {
                      result.push(
                        <ImageCarousel key={i} images={images} onImageClick={setImageOverlay} />
                      );
                    } else {
                      result.push(
                        <div key={i} style={{textAlign: 'center'}}>
                          <img src={blocks[i].value} alt={`news-img-${i}`} style={{maxWidth: '100%', borderRadius: '0.7rem', margin: '1rem 0', cursor: 'pointer'}} onClick={() => setImageOverlay(blocks[i].value)} />
                        </div>
                      );
                    }
                    i = j;
                  } else if (blocks[i].type === 'link') {
                    const pos = (blocks[i] as any).position || 'left';
                    result.push(
                      <p key={i} className={`news-align-${pos}`} style={{marginBottom: '1rem'}}>
                        <a href={blocks[i].value} target="_blank" rel="noopener noreferrer" style={{color: '#2563eb', textDecoration: 'underline', wordBreak: 'break-all'}}>{blocks[i].value}</a>
                      </p>
                    );
                    i++;
                  } else if (isHeadingBlock(blocks[i])) {
                    const Tag = blocks[i].type;
                    const pos = (blocks[i] as any).position || 'left';
                    result.push(
                      <Tag key={i} className={`news-${blocks[i].type} news-align-${pos}`}>{blocks[i].value}</Tag>
                    );
                    i++;
                  } else if (blocks[i].type === 'text') {
                    const pos = (blocks[i] as any).position || 'left';
                    result.push(
                      <p key={i} className={`news-align-${pos}`} style={{marginBottom: '1rem'}}>{blocks[i].value}</p>
                    );
                    i++;
                  } else {
                    i++;
                  }
                }
                return result;
              })()}
            </div>
            <button className="news-detail-close" onClick={() => setSelectedNews(null)}>閉じる</button>
          </div>
        </div>
      )}
      {/* 画像オーバーレイ */}
      {imageOverlay && (
        <div className="news-overlay" onClick={() => setImageOverlay(null)}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',width:'100vw',position:'relative'}}>
            <img src={imageOverlay} alt="拡大画像" style={{maxHeight:'90vh',maxWidth:'90vw',borderRadius:'1rem',boxShadow:'0 4px 32px rgba(0,0,0,0.25)',zIndex:2}} onClick={e => e.stopPropagation()} />
            <button className="news-detail-close" style={{position:'absolute',top:24,right:32,zIndex:3}} onClick={() => setImageOverlay(null)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
}

// 画像カルーセルコンポーネント
function ImageCarousel({ images, onImageClick }: { images: string[], onImageClick?: (img: string) => void }) {
  const [current, setCurrent] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      const child = scrollRef.current.children[current] as HTMLElement;
      if (child) {
        child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [current]);

  return (
    <div style={{ margin: '1.5rem 0' }}>
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '1rem',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: '0.5rem',
        }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            style={{
              flex: '0 0 auto',
              minWidth: '220px',
              maxWidth: '80vw',
              scrollSnapAlign: 'center',
              position: 'relative',
              textAlign: 'center',
            }}
          >
            <img
              src={img}
              alt={`carousel-img-${idx}`}
              style={{
                width: '100%',
                maxWidth: '320px',
                borderRadius: '0.7rem',
                objectFit: 'contain',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                border: current === idx ? '2px solid #2563eb' : '2px solid transparent',
                transition: 'border 0.2s',
              }}
              onClick={() => {
                setCurrent(idx);
                if (onImageClick) onImageClick(img);
              }}
            />
          </div>
        ))}
      </div>
      {/* カルーセルインジケータ */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
        {images.map((_, idx) => (
          <span
            key={idx}
            style={{
              display: 'inline-block',
              width: current === idx ? 14 : 8,
              height: 8,
              borderRadius: 4,
              background: current === idx ? '#2563eb' : '#cbd5e1',
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}
