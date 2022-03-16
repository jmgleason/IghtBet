import BETS from '../../data/dummy-data';

const initialState = {
  allBets: BETS,
  userBets: BETS.filter(bet => bet.ownerId == 1)
};

export default (state = initialState, action) => {
  return state;
};
