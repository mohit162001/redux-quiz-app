import { createSlice } from "@reduxjs/toolkit"


export const initialModalState = {
    isModal: true
}

const modalSlice = createSlice({
    name:'modal',
    initialState:initialModalState,
    reducers:{
        showModal(state){
            state.isModal = !state.isModal
        }
    }
})
export default modalSlice;
export const modalAction = modalSlice.actions;