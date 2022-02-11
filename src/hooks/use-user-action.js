import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../redux/actions';

export const useUserActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
