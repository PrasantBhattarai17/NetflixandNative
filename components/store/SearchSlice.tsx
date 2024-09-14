import { createSlice } from "@reduxjs/toolkit";

const search =createSlice({
    name:'search',
    initialState:{
        searchData:null,
        toggleSearch:false,
        constantData:null
    },
    reducers:{
        addSearchData:(state,action)=>{
            state.searchData=action.payload;
        },
        ToggleSearch:(state)=>{
            state.toggleSearch=!state.toggleSearch;        }
    ,
    addConstantdata:(state,action)=>{
        state.constantData=action.payload;
    },
}
})

export const {addSearchData,ToggleSearch,addConstantdata} =search.actions;
export default search.reducer;