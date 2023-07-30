import {configureStore} from "@reduxjs/toolkit"
import componentSlice from "./features/component/componentSlice";

const store = configureStore({
    reducer:{
	component:componentSlice,
}
})

export default store;
