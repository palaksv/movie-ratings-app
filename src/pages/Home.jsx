 import { useEffect,useState } from "react";
 import Header from "../components/common/Header";
 import { Box,styled } from "@mui/material";
 import Banner from "../components/Banner";
 import UpNext from "../components/UpNext";
 import Slide from "../components/Slide";
// import categorymovie from "./CategoryMovies";
import {categorymovie} from '../services/api.js'
import { NOWPLAYING_API_URL } from "../constants/constant.js";



const Wrapper=styled(Box)`
display:flex;
padding: 20px 0;


`;

const Component=styled(Box)`
padding:0 115px;


`


const Home=()=>{

   const [movies,setMovies]=useState([])

 useEffect(()=>{
   const getData=async()=>{
      let response=await categorymovie(NOWPLAYING_API_URL);
      setMovies(response.results);
      }
      getData();
 },[])

   return(
      <>
      <Header/>
      <Component>
      <Wrapper >
        <Banner movies={movies}/>
        <UpNext movies={movies} />
    </Wrapper>
    <Slide  movies={movies} />
    <Slide  movies={movies} />
    <Slide  movies={movies} />
    <Slide  movies={movies} />
      </Component>
    
      </>
    
   )
}


export default Home;