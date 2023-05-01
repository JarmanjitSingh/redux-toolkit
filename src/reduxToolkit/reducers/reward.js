import { createReducer, createAction } from "@reduxjs/toolkit";

export const increment = createAction('reward/increment')
export const incrementByAmount = createAction('reward/incrementByAmount')

const initialState = {
    value: 0
}
const rewardReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase(increment, (state)=>{
        state.value++
    })
    .addCase(incrementByAmount, (state, action)=>{
        state.value += action.payload
    })
})

export default rewardReducer;