import axios from "axios";

FIREBASE_BASE_URL = "https://ight-bet-default-rtdb.firebaseio.com/";

export async function axiosFetchAllBets() {
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
      settleDate: response.data[key].settleDate,
    };

    bets.push(betObj);
  }

  return bets;
}

export async function axiosAddBet(betData) {
  const response = await axios.post(`${FIREBASE_BASE_URL}bets.json`, betData);
  return response.data.name;
}

export function axiosUpdateBet(id, betData) {
  return axios.put(`${FIREBASE_BASE_URL}bets/${id}.json`, betData);
}

export function axiosDeleteBet(id) {
  return axios.delete(`${FIREBASE_BASE_URL}bets/${id}.json`);
}

export async function fetchBet(betId) {
  axios.get(`${FIREBASE_BASE_URL}bets/${betId}`);
}
