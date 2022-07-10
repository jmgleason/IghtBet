import { useState } from "react";
import { useDispatch } from "react-redux";
import { Alert } from "react-native";

import AuthContent from "../../components/Auth/AuthContent";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import { axiosLogin } from "../../utils/http";
import { authenticate } from "../../store/redux/auth";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const dispatch = useDispatch();

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);

    try {
      const token = await axiosLogin(email, password);
      dispatch(authenticate({ token: token }));
    } catch (error) {
      Alert.alert(
        "Login Failed!",
        "Please check your credentials or create a new user"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
