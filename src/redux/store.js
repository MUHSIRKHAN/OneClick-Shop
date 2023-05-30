import {configureStore} from '@reduxjs/toolkit'

import {user, userReducer} from "./reducers/user"

const Store=configureStore({
    reducer:{
        user:userReducer,

    }
})
export default Store