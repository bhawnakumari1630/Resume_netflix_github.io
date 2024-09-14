import React, { useEffect, useState } from 'react'
import {  apiUrl } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { openMenu } from '../utils/slice'

function VideoContainer() {
  const [videos, setVideos] = useState([])
  const dispatch = useDispatch()

  useEffect(()=>{
    getVideos()
    dispatch(openMenu())
  },[])

  const getVideos = async () => {
    // console.log('api : ', apiUrl)
    const data = await fetch(apiUrl)
    const json = await data.json()
    setVideos(json.items)
  }

  // useEffect(() => {
  //   const API_KEY = 'AIzaSyByCUOff-LeymbYI6cuhqENJe5w7qT5ZoI';
  //   const query = 'shreeRadhe';
  //   const maxResults = 15;

  //   fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${query}&key=${API_KEY}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data.items);
  //       // setVideos(data.items);
  //     })
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);
  
 
  return (
    <div className='flex flex-wrap bg-blac'>
        {/* <HOC_card info={videos[0]} /> */}
        {videos.map(video => (
          <Link to={'/watch?v=' + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ) )}
    </div>
  )
}

export default VideoContainer


