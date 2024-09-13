import {configureStore} from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";

const Appstore=configureStore({
    reducer:{
        searched:SearchSlice
    }
})


export default Appstore;