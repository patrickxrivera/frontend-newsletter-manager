import api from '../api';
import * as D from '../utils/dispatchHelpers';

export const fetchInitialEmails = (id) => async (dispatch) => {
  const initialEmails = await api.fetchInitialEmailsSent(id);

  dispatch(D.fetchInitialEmailsSuccess(initialEmails.data));
};
