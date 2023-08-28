import React from 'react'
import styled from "styled-components";
import image1 from '../assests/images/image1.png'
export default function Login() {

    const handleClick =()=>{
        const clientId= "e09305953e25459eb79177fb983d8b21";
        const redirectUri = "http://localhost:3000/";
        const apiUrl= "https://accounts.spotify.com/authorize";;
        const scopes = ['user-read-email',
       'user-read-private' ,'user-read-playback-state',
       'user-modify-playback-state',
       'user-read-currently-playing','user-read-playback-position',
       'user-top-read',
       'user-read-recently-played',
       'playlist-read-private', // Add this scope for accessing private playlists
       'playlist-read-collaborative',
      ]

       const url = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(" ")}&response_type=token&show_dialog=true`;

       window.location.href=url;

    }
  return (
    <Container>
    <img src={image1}  alt="spotify"/>
    <button onClick={handleClick}> Connect </button>
    </Container>
  )
}

const  Container = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
background-color:#1db954;
height:100vh;
width:100vw;
gap:5rem; 
img{
    height:20vh;   
}
button{
    width:30%;
    padding: 1rem 5rem ;
    border-radius: 5rem;
    background-color :black;
    color:#49f585;
    border:none;
    font-size: 1.4rem;
}
`
