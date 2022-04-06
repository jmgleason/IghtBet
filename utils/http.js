import axios from 'axios';

FIREBASE_BASE_URL = 'https://ight-bet-default-rtdb.firebaseio.com/'

export function addBet(betData) {
  axios.post(
    `${FIREBASE_BASE_URL}bets.json`,
    betData
  );
}

export async function fetchAllBets() {
  const response = await axios.get(
    `${FIREBASE_BASE_URL}bets.json`
  );

  const bets = [];
  console.log(response.data);

  for (const key in response.data) {
    const betObj = {
      id: key,
      title: response.data[key].title,
      description: response.data[key].description,
      wager: response.data[key].wager,
      statusCd: response.data[key].statusCd,
      ownerId: response.data[key].ownerId,
      receivingOwnerId: response.data[key].receivingOwnerId,
      expirationDate: new Date(response.data[key].expirationDate)
    }

    bets.push(betObj);
  }

  console.log(bets);
  return bets;
}

export async function fetchBet(betId) {
  axios.get(
    `${FIREBASE_BASE_URL}bets/${betId}`
  )
}
