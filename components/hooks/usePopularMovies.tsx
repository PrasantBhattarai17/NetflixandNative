import  { useEffect, useState } from 'react'
import { APIoptions } from '../utils/constants';

const usePopularMovies = (api:any) => {
    const [PopularData,setPopularData]=useState([]);
    const fetchAllMovie=async()=>{
        const response =await fetch(api,APIoptions);
        const json=await response.json();
        setPopularData(json?.results)
    }
    useEffect(()=>{
        fetchAllMovie();
    },[]);
    return PopularData;
}

export default usePopularMovies