import * as ActionType from '../Action/ActionType';

interface DriverLocation {
  latitude: number | null;
  longitude: number | null;
}

interface InitialState {
  driverLocation: DriverLocation;
}

interface Action {
  type: string;
  driverLocation?: DriverLocation;
}

// Initial state
const initialState: InitialState = {
  driverLocation: {
    latitude: null,
    longitude: null,
  },
};

// Reducer function
export const DriverReducer = (
  state = initialState,
  action: Action,
): InitialState => {
  switch (action.type) {
    case ActionType.SET_DRIVER_LOCATION:
      return {
        ...state,
        driverLocation: {
          ...state.driverLocation,
          ...action.driverLocation,
        },
      };

    default:
      return state;
  }
};
