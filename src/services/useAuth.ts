import { useSelector } from 'react-redux'
import { useQuery } from '@apollo/react-hooks';

import GET_PROFILE from 'graphql/query/getProfile';
// import MESSAGE from 'graphql/query/message';

function useAuth() {
  const { loading, error, data } = useQuery(GET_PROFILE, {
    variables: { id: '1' },
  });

  const test = useSelector(state => {
    console.log('state', state);
    return state
  });
  const profile = undefined;

  return { isAuthenticated: !!profile, profile };
}

export default useAuth;
