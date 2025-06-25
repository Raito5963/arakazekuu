import { NewsContentBlock } from './types';

const firstlive = {
  id: 1,
  title: '嵐風くう -1st OnemanLive-',
  date: '2025-06-26',
  publishAt: '2025-06-26T19:00:00+09:00',
  content: [
    { type: 'h1' as 'h1', position: 'center' as 'center', value: '~-宴-~' },
    { type: 'h2' as 'h2', position: 'center' as 'center', value: '~-2025年8月1日-~' },
    { type: 'h3' as 'h3', position: 'center' as 'center', value: '『宴』キービジュアル公開！！' },
    { type: 'h2' as 'h2', position: 'center' as 'center', value: 'チケットはこちら' },
    { type: 'link' as 'link', position: 'center' as 'center', value: 'https://t.livepocket.jp/e/tfnhc' },
    { type: 'h4' as 'h4', position: 'center' as 'center', value: 'クリックで画像を拡大できます。' },
    { type: 'image' as 'image', value: '/firstlive1.jpg' },
    { type: 'image' as 'image', value: '/firstlive2.jpg' },
    { type: 'h2' as 'h2', position: 'center' as 'center', value: 'グッズ情報' },
    { type: 'h3' as 'h3', position: 'center' as 'center', value: '近日公開!!お楽しみに!!' },
    { type: 'h2' as 'h2', position: 'center' as 'center', value: '　' },
    { type: 'h3' as 'h3', position: 'left' as 'left', value: '今後の追加情報も要チェック！' },
    { type: 'h3' as 'h3', position: 'left' as 'left', value: 'たくさんの方にお会いできるのを楽しみにしています!' },
  ]
};

export default firstlive;
