import { useSelector } from 'react-redux'

function useAuth() {
  const test = useSelector(state => {
    console.log('state', state);
    return state
  });
  const profile = undefined;

  return { isAuthenticated: !!profile, profile };
}

export default useAuth;
