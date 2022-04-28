import { createSlice } from '@reduxjs/toolkit'

export const songSlice = createSlice({
  name: 'songs',
  initialState: {
    value: []
            },
  reducers: {
      addSong: (state, action) =>{
          state.value = [...state.value,
                          {
                              id: (state.value[state.value.length-1] === undefined ? 0 : (state.value[state.value.length-1].id+1))
                            ,...action.payload
                          }
                        ]
                        fetch('http://localhost:9000/songs', {
                            method: 'POST', 
                            headers: { 'Content-Type': 'application/json'},
                            body: JSON.stringify(state.value[state.value.length-1]) })
      },
      deleteSong: (state, action) => {
        
        state.value = state.value.filter(i=>i.id !== action.payload)

        fetch('http://localhost:9000/songs/' + action.payload, {
          method: 'DELETE', 
          headers: { 'Content-Type': 'application/json'}})
      },
      addSongsFromDB: (state, action)=>{
        state.value = [...action.payload]
      }
    }
})

// Action creators are generated for each case reducer function
export const { addSong, deleteSong, addSongsFromDB} = songSlice.actions

export default songSlice.reducer