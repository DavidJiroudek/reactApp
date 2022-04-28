import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { updateUrl } from "./redux/reducers/activeUrlReducer";
import { addSongsFromDB, deleteSong } from "./redux/reducers/songReducer";

const SongList = () => {
    const dispatch = useDispatch();
    const songs = useSelector((state) => state.songStore.value)
    useFetch(dispatch)
    const jsxSongs = songs.map(i => <li key={i.id}>{i.songName}<button onClick={()=>dispatch(updateUrl({url:i.url, source: i.source}))}>Přehrát</button><button onClick={()=>dispatch(deleteSong(i.id))}>Odstranit</button></li>)
    return(
        <ol>
            {jsxSongs}
        </ol>
    )
}

const useFetch = (dispatch) =>{
    useEffect(() => {
        fetch('http://localhost:9000/songs').then(response => response.json())
      .then((result) => {dispatch(addSongsFromDB(result))});
    },[]);

}
export default SongList