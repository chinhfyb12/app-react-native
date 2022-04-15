import {IProfileState} from './profile.dto';

const initialState: IProfileState = {
  loading: false,
};

export function profileReducer(
  state = initialState,
  action: any,
): IProfileState {
  switch (action.type) {
    default:
      return state;
  }
}
