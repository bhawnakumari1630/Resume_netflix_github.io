import React, { useEffect, useState } from 'react'
import {  apiUrl, channels_url } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { openMenu } from '../utils/slice'

function VideoContainer() {
  const [videos, setVideos] = useState([])
  const [channel , setChannel] = useState([])
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

  return (
    <div className='flex flex-wrap bg-blac'>
        {videos.map(video => (
          <Link to={'/watch?v=' + video.id} key={video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ) )}
    </div>
  )
}

export default VideoContainer


