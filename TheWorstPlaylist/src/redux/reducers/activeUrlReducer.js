import { createSlice } from '@reduxjs/toolkit'

export const activeUrlSlice = createSlice({
  name: 'activeUrl',
  initialState: {
    value: {url:"https://www.youtube.com/watch?v=HKl9ONpTPc0&ab_channel=Phobulos", source:false}
            },
  reducers: {
      updateUrl: (state, action) =>{
          state.value = action.payload
      },
    }
})

// Action creators are generated for each case reducer function
export const { updateUrl} = activeUrlSlice.actions

export default activeUrlSlice.reducer