import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateProviderTemp";
import axios from "axios";
import { reducerCases } from "../utils/Constants";
import { styled } from "styled-components";
export default function Playlists() {
  const [{token,playlists } ,dispatch] = useStateProvider();
  console.log("token " ,token) 
  useEffect(()=>{
   const getPlaylistData = async ()=>{
    const response = await axios.get('https://api.spotify.com/v1/me/playlists' ,{
      headers :{
        Authorization: `Bearer ${token}`,
        "Content-Type" :"application/json",
      }
    });
    
    console.log(response);
    const {items } = response.data;
    const playlists = items.map(({name ,id})=>{
      return {name ,id}
    });
    dispatch({type:reducerCases.SET_PLAYLISTS, playlists
    })

   };
   getPlaylistData();
  } ,[token,dispatch]);

  const changeCurrentPlayList = (selectedPlaylistId)=>{
    dispatch({type:reducerCases.SET_PLAYLIST_Id, selectedPlaylistId})
  }
  
  return <Container>
<ul>
  {
  playlists.map(({name ,id})=>{
   return(
    <li key={id} onClick={()=>changeCurrentPlayList(id)}>{name}</li>
   )
  })}
</ul>
  </Container>
  
}

const Container = styled.div`
height:100%;
overflow:hidden;
ul{
    list-style:none;
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding: 1rem;
    height:52vh;
    max-height:100%;
    overflow:auto;
    &::-webkit-scrollbar{
      width: 0.7rem;
      &-thumb {
        background-color:rgba(255,255,255,0.6);
      }
    }

    li{
        display:flex;
        gap :1rem;
        cursor: pointer;
        transition :0.3sec ease-in-out;
        &:hover{
            color:white;
        }

    }

   }`;

