import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import {thunk} from 'redux-thunk'
import { RideReducer } from "../Reducers/RideReducer";
import { DriverReducer } from "../Reducers/DriverReducer";

const persistConfig = { key: "Root", storage: AsyncStorage };

const rootReducer = combineReducers({
  Ride: RideReducer,
  Driver : DriverReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
const persist = persistStore(Store);

export default { Store, persist };