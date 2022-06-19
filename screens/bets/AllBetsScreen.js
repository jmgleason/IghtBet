import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import BetsList from "../../components/BetsList";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import ErrorOverlay from "../../components/UI/ErrorOverlay";
import { setBets } from "../../store/redux/bets";
import { axiosFetchAllBets } from "../../utils/http";

const AllBetsScreen = (props) => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const fetchedBets = useSelector((state) =>
    state.bets.allBets.filter((bet) => bet.ownerId == 1)
  );

  useEffect(() => {
    async function getBets() {
      setIsFetching(true);
      try {
        const bets = await axiosFetchAllBets();
        dispatch(setBets(bets));
      } catch (error) {
        setError("Could not get Bets.");
      }
      setIsFetching(false);
    }

    getBets();
  }, []);

  function errorHandler() {
    setError(null);
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return <BetsList bets={fetchedBets} />;
};

export default AllBetsScreen;
