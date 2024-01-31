import { createSlice } from "@reduxjs/toolkit"



const initialUserAnsState = {
    userAnsweres:[]
}

const userAnsSlice = createSlice({
    name:'user-ans',
    initialState:initialUserAnsState,
    reducers:{
        selectAnwer(state,action){
            state.userAnsweres.push(action.payload)
        },
        restart(state){
            state.userAnsweres = []
        }
    }
})

export default userAnsSlice;
export const userAction = userAnsSlice.actions