"use client";
import { useEffect, useState } from 'react';
import { getLatestVideos, Youtube } from '../../lib/youtube';
import Image from 'next/image';
import './../style/youtube.css';

interface VideoProps {
    channelId: string;
}

const LatestYoutube = ({ channelId }: VideoProps) => {
    const [videos, setVideos] = useState<Youtube[]>([]);

    useEffect(() => {
        async function fetchVideos() {
            const fetchedVideos = await getLatestVideos(channelId);
            setVideos(fetchedVideos);
        }
        fetchVideos();
    }, [channelId]);

    return (
        <div className='youtube'>
            <div className='videoList'>
                {videos.map((video) => (
                    <a
                        key={video.id}
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='videoItem'
                    >
                        <Image src={video.thumbnail} alt={video.title} height={300} width={400} className='videoThumbnail' />
                        <p>{video.title}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default LatestYoutube;
