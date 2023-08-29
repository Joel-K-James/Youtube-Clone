import { useState,useEffect } from "react"
import { Box,Typography } from "@mui/material"
import Videos from "./Videos"
import { useParams } from "react-router-dom"
import { Fetchfromapi } from "../utils/Fetchfromapi"
const Search = () => {
  const [videos,setVideos]=useState([])
  const { searchTerm }=useParams()
  useEffect(()=>{
Fetchfromapi(`search?part=snippet&q=${searchTerm}`)
  .then((data)=>setVideos(data.items))},[])
  return (
    <Box p={2} sx={{ overflowY:"auto",height:"90vh",flex:2}}>
    <Typography variant="h4"
    fontWeight="bold" mb={2} 
    sx={{color:'white'}}>
     Search Results For <span style={{color:'#F31508'}}>{searchTerm}</span>
    </Typography>
    <Videos videos={videos}/>
  </Box>
  )
}

export default Search