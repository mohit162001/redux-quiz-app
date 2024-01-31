import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal-slice";
import userAnsSlice from "./userAnsSlice";

const store = configureStore({
    reducer:{
                modal : modalSlice.reducer,
                userAns : userAnsSlice.reducer
            }
})

export default store;
