const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export interface Youtube {
    id: string;
    thumbnail: string;
    title: string;
}

export async function getLatestVideos(
    channelId: string,
    maxResults = 3
): Promise<Youtube[]> {
    try {
        if (!API_KEY) {
            throw new Error("YouTube APIキーが設定されていません。");
        }

        const url = `${BASE_URL}/search?key=${API_KEY}&channelId=${channelId}&part=snippet&type=video&order=date&maxResults=${maxResults}`;
        console.log("Fetching URL:", url); //デバッグ用

        const res = await fetch(url);

        if (!res.ok) {
            const errorData = await res.json();
            console.error("YouTube API Error:", errorData);
            throw new Error(`YouTube API Error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        if (!data.items) {
            throw new Error("動画がありません。");
        }

        return data.items.map((item: any) => ({
            id: item.id.videoId, 
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
        }));
    } catch (error) {
        console.error("動画を取得できませんでした。", error);
        return [];
    }
}
