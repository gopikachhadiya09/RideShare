import * as ActionType from '../Action/ActionType';

// Define types for the ride request and selected rider
interface RideRequest {
  id: string;
  status: string; 
}

interface RideReducerState {
  rideRequests: RideRequest[];
  selectedRider: RideRequest | null;
}

// Define the initial state
const initialState: RideReducerState = {
  rideRequests: [],
  selectedRider: null,
};

// Define types for actions
interface SetRideRequestsAction {
  type: typeof ActionType.SET_RIDE_REQUESTS;
  rideRequests: RideRequest[];
}

interface SelectedRiderAction {
  type: typeof ActionType.SELECTED_RIDER;
  selectedRider: RideRequest;
}

interface UpdateRideRequestStatusAction {
  type: typeof ActionType.UPDATE_RIDE_REQUEST_STATUS;
  rideRequests: RideRequest;
}

type RideActions =
  | SetRideRequestsAction
  | SelectedRiderAction
  | UpdateRideRequestStatusAction;

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
    case ActionType.SELECTED_RIDER:
      return {
        ...state,
        selectedRider: action.selectedRider,
      };
    case ActionType.UPDATE_RIDE_REQUEST_STATUS:
      return {
        ...state,
        rideRequests: state.rideRequests.map(request =>
          request.id === action.rideRequests.id
            ? {...request, status: action.rideRequests.status}
            : request,
        ),
      };
    default:
      return state;
  }
};
