import Bet from '../models/bet';

const BETS = [
  new Bet(
    1,
    1,
    [2],
    "Superbowl Game",
    "",
    "I bet the winner of the superbowl will be the Chargers",
    "50.00",
    "2021-03-01",
    true
  ),
  new Bet(
    2,
    1,
    [4],
    "Push Ups",
    "",
    "I bet I can do more push ups than Brian",
    "20.00",
    "2021-04-10",
    true
  ),
  new Bet(
    3,
    1,
    [5],
    "Gay",
    "",
    "I bet that Michael is gay",
    "10.00",
    "2021-03-21",
    false
  ),
  new Bet(
    4,
    2,
    [3, 4, 5],
    "Smoked Out",
    "",
    "I bet Michael can take more dabs that Apoorv",
    "35.00",
    "2021-03-15",
    true
  ),
  new Bet(
    5,
    1,
    [2, 3],
    "I can jump higher than Apoorv and this is a really long title that will never end",
    "",
    "I bet I can jump higher than Apoorv and this is also a really long description describing the fact that I can, indeed, jump higher than Apoorv and that's a fact because I am right",
    "100.00",
    "2021-04-03",
    false
  )
];

 export default BETS;