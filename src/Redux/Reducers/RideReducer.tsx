import * as ActionType from '../Action/ActionType';

interface RideRequest {
  id: string;
  status: string;
}

interface RideReducerState {
  rideRequests: RideRequest[];
}

// Define the initial state
const initialState: RideReducerState = {
  rideRequests: [],
};

// Define types for actions
interface SetRideRequestsAction {
  type: typeof ActionType.SET_RIDE_REQUESTS;
  rideRequests: RideRequest[];
}

type RideActions = SetRideRequestsAction;

export const RideReducer = (
  state: RideReducerState = initialState,
  action: RideActions,
): RideReducerState => {
  switch (action.type) {
    case ActionType.SET_RIDE_REQUESTS:
      return {
        ...state,
        rideRequests: action.rideRequests,
      };
    default:
      return state;
  }
};
