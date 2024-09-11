import { useEffect, useState } from 'react'
import { APIoptions, Movie_API,CDN_POSTER_URL  } from '../utils/constants'

const useMovieList = () => {
    const [img,setImg]=useState('');


    const fetchAllMovie=async()=>{
        const response =await fetch(Movie_API,APIoptions);
        const json=await response.json();
        const data=CDN_POSTER_URL+json?.results[0]?.poster_path;
        setImg(data);
    }


    useEffect(()=>{
        fetchAllMovie();
    },[]);
    return img;

}

export default useMovieList