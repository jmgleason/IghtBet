import axios from "axios";

FIREBASE_BASE_URL = "https://ight-bet-default-rtdb.firebaseio.com/";

export function addBet(betData) {
  axios.post(`${FIREBASE_BASE_URL}bets.json`, betData);
}

export async function fetchAllBets() {
  const response = await axios.get(`${FIREBASE_BASE_URL}bets.json`);

  const bets = [];
  for (const key in response.data) {
    const betObj = {
      id: key,
      title: response.data[key].title,
      description: response.data[key].description,
      wager: response.data[key].wager,
      statusCd: response.data[key].statusCd,
      ownerId: response.data[key].ownerId,
      receivingOwnerId: response.data[key].receivingOwnerId,
      settleDate: new Date(response.data[key].settleDate),
    };

    bets.push(betObj);
  }

  return bets;
}

export async function fetchBet(betId) {
  axios.get(`${FIREBASE_BASE_URL}bets/${betId}`);
}
