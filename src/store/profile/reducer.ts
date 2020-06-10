import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import { Profile } from 'store/profile/models';
import * as actions from 'store/profile/actions';
import { SET, REMOVE } from 'store/profile/constants';

export type ProfileAction = ActionType<typeof actions>;

export type ProfileState = Readonly<{
    profile: Profile;
}>;
const initialState: ProfileState = {
  profile: {
    id: 'string',
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    photo_url: 'string',
  }
};

export default combineReducers<ProfileState, ProfileAction>({
  profile: (state = initialState.profile, action) => {
    console.log('action', action);
    // return state;

    // if (action.type === SET) {
    //   const newState = { ...state, ...action.payload };
    //   return newState;
    // } else if (action.type === REMOVE) {
    //   return state;
    // }
    // return state;

    switch (action.type) {
      case SET:
        return { ...state, ...action.payload };

      case REMOVE:
        return state;

      default:
        return state;
    }
  },
});
