import Bet from "../models/bet";

const BETS = [
  new Bet(
    1,
    1,
    [2],
    "Superbowl Game",
    "",
    "I bet the winner of the superbowl will be the Chargers",
    "5000",
    new Date("2021-03-01"),
    1
  ),
  new Bet(
    2,
    1,
    [4],
    "Push Ups",
    "",
    "I bet I can do more push ups than Brian",
    "2000",
    new Date("2021-04-10"),
    0
  ),
  new Bet(
    3,
    1,
    [5],
    "Gay",
    "",
    "I bet that Michael is gay",
    "1000",
    new Date("2021-03-21"),
    0
  ),
  new Bet(
    4,
    2,
    [3, 4, 5],
    "Smoked Out",
    "",
    "I bet Michael can take more dabs that Apoorv",
    "3500",
    new Date("2021-03-15"),
    0
  ),
  new Bet(
    5,
    1,
    [2, 3],
    "I can jump higher than Apoorv and this is a really long title that will never end",
    "",
    "I bet I can jump higher than Apoorv and this is also a really long description describing the fact that I can, indeed, jump higher than Apoorv and that's a fact because I am right",
    "10000",
    new Date("2021-04-03"),
    2
  ),
];

export default BETS;
