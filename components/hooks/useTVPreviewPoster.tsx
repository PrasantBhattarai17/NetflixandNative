import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { APIoptions, Preview_Poster } from '../utils/constants'

const useTVPreviewPoster = () => {
  
    const [poster,setPoster]=useState([]);

    const Preview=async()=>{
        const response=await fetch(Preview_Poster,APIoptions);
        const json=await response.json();
        setPoster(json?.results)
    }

    useEffect(()=>{
        Preview()
    },[]);
    return poster;
}

export default useTVPreviewPoster