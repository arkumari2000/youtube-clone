import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({videos, onSelectedVideo}) =>{
    const list = videos.map((video) => {
        return <VideoItem onSelectedVideo={onSelectedVideo} key={video.id.videoId} video={video}/>
    });

    return(
        <div className="ui relexed divided list">
            {list}
        </div>
    );
}

export default VideoList;