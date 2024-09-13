import { createSlice } from "@reduxjs/toolkit";

const search =createSlice({
    name:'search',
    initialState:{
        searchData:null,
        toggleSearch:false
    },
    reducers:{
        addSearchData:(state,action)=>{
            state.searchData=action.payload;
        },
        ToggleSearch:(state)=>{
            state.toggleSearch=!state.toggleSearch;        }
    }
})

export const {addSearchData,ToggleSearch} =search.actions;
export default search.reducer;