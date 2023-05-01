import { configureStore } from "@reduxjs/toolkit";
import rewardReducer from "./reducers/reward";
import accountReducer from "./slices/account"
import bonusReducer from "./slices/bonus"

const store = configureStore({
    reducer: {
        account: accountReducer,
        bonus: bonusReducer,
        reward: rewardReducer
    }
});

export default store;