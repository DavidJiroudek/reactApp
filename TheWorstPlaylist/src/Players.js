import getYouTubeID from "get-youtube-id";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import YouTube from "react-youtube"
import { updateUrl } from "./redux/reducers/activeUrlReducer";

const Players = () => {
    const song = useSelector((state) => state.activeUrl.value)
    const songList = useSelector((state) => state.songStore.value)
    const dispatch = useDispatch()
    const [playedSongs, setPlayedSongs] = useState([])


    if(song.source === false){
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    return(<div style={{margin:"0 auto", width:"640px", alignItems:"center"}}>
        <YouTube videoId={getYouTubeID(song.url)} opts={opts} onEnd={()=>loadNextSong(songList, dispatch)} />
        <button style={{margin:" 20px 48%", width:"60px", height:"30px"}} onClick={()=>loadNextSong(songList, dispatch, playedSongs, setPlayedSongs)}>Další</button>
        </div>)
    }else{

      //spotify je kravina a nejde u něj nastavit pořádně autoplay a onEnd event jako u youtube proto se u něj musí klikat
    return(<div>
      <iframe id="spotifyPlayer" style={{borderRadius:"12px"}} src={"https://open.spotify.com/embed/track/" + song.url.match('(?<=\\/).{22}(?=\\?)') + "?utm_source=generator"} width="100%" height="380" frameBorder="0" allowFullScreen="" autoPlay="1" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <button style={{margin:" 20px 48%", width:"60px", height:"30px"}} onClick={()=>loadNextSong(songList, dispatch, playedSongs, setPlayedSongs)}>Další</button>
            
          </div>
    )
    }
}
const loadNextSong = (songList, dispatch, playedSongs, setPlayedSongs) =>{
  let randomNumber = Math.floor(Math.random() * songList.length)
  let i = 0;
  console.log(playedSongs)
  while (playedSongs.includes(randomNumber)){
    randomNumber = Math.floor(Math.random() * songList.length)
    i++;
    if(i>=10){
      setPlayedSongs([])
      playedSongs = []
    }
  }

    setPlayedSongs([...playedSongs, randomNumber])



    const randomSong = songList[randomNumber]
    dispatch(updateUrl({url:randomSong.url, source: randomSong.source}))
  }



 export default Players
