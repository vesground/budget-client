import { action } from 'typesafe-actions';

import { Profile } from 'store/profile/models';
import { SET, REMOVE } from 'store/profile/constants';

export const set = (
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  photo_url: string
) => action(SET, { id, firstName, lastName, email, photo_url } as Profile);

export const remove = (id: string) => action(REMOVE, id);
