import * as ActionType from '../Action/ActionType';

// Define the shape of the driver location state
interface DriverLocation {
  latitude: number | null;
  longitude: number | null;
}

// Define the shape of the initial state
interface InitialState {
  driverLocation: DriverLocation;
  address: string | null;
}

// Define the shape of the action
interface Action {
  type: string;
  driverLocation?: DriverLocation;
  address?: string;
}

// Initial state
const initialState: InitialState = {
  driverLocation: {
    latitude: null,
    longitude: null,
  },
  address: null,
};

// Reducer function
export const DriverReducer = (state = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.SET_DRIVER_LOCATION:
      return {
        ...state,
        driverLocation: {
          ...state.driverLocation,
          ...action.driverLocation,
        },
      };
    case ActionType.SET_DRIVER_ADDRESS:
      return {
        ...state,
        address: action.address,
      };
    default:
      return state;
  }
};
