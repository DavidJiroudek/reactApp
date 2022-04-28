import { useState } from "react"
import { useDispatch } from "react-redux";
import { addSong } from "./redux/reducers/songReducer";
import "./SongForm.css"
const SongForm = () => {
    const dispatch = useDispatch();

    return(
        <div>
            <form className="addSongForm">
                <input id="songName" type="text" placeholder ="Název písně"></input>
                <input id="url" type="text" placeholder ="Url"></input>
                <div>
                <input type="radio" id="sourceYouTube" name="source" value ="YouTube" defaultChecked ></input>
                <label htmlFor="sourceYouTube">YouTube</label>
                </div>
                <div>
                <input type="radio" id="sourceSpotify" name="source" value ="Spotify"></input>
                <label htmlFor="sourceSpotify">Spotify</label>
                </div>
                <input type="button"value="Přidat píseň" onClick={() => dispatch(addSong(getData()))}></input>
            </form>

        </div>
    )
}

const getData = () =>{
    return{  songName: document.getElementById("songName").value,
                    url: document.getElementById("url").value,
                    source: document.getElementById("sourceSpotify").checked}


}
export default SongForm