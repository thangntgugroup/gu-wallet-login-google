import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { auth } from "../../common/constants/firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useTranslation } from "react-i18next";
import { DODGER_BLUE_2_COLOR } from "../../common/constants/colors";

function LoginPages() {
  const { t } = useTranslation();
  const classes = useStyles();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    try {
      const signIn = await signInWithPopup(auth, provider);
      const idToken = await signIn.user.getIdToken();
      window.postMessage({
        type: "login_web3auth",
        payload: {
          action: "Success",
          idToken: idToken,
        },
      });
    } catch (error) {
      console.log(error);
      window.postMessage({
        type: "login_web3auth",
        payload: {
          action: "Error",
          error: error,
        },
      });
    }
  };

  const onCancel = async () => {
    window.postMessage({
      type: "login_web3auth",
      payload: { action: "Cancel" },
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.title}>{t("title")}</div>
        <div className={classes.description}>{t("description")}</div>
        <div className={classes.description}>{t("sign_in")}</div>
        <div onClick={() => handleLogin()} className={classes.buttonSignIn}>
          <img
            src={require("../../assets/google_login.png")}
            alt=""
            className={classes.buttonSignInIcon}
          />
          <p className={classes.buttonSignInText}>
            {t("continue_with_google")}
          </p>
        </div>
        <div className={classes.description}>
          {t("description_continue_google")}
        </div>
        <div className={classes.cancel} onClick={onCancel}>
          {t("cancel")}
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  container: {
    width: 360,
    height: 600,
    padding: "16px 24px",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: "42px",
  },
  description: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: "normal",
    lineHeight: "21px",
    color: theme.palette.text.secondary,
  },
  buttonSignIn: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: 8,
    padding: "0 24px",
    cursor: "pointer",
  },
  buttonSignInIcon: {
    width: 24,
    height: 24,
  },
  buttonSignInText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: theme.spacing(2),
  },
  cancel: {
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: theme.palette.background.paper,
    color: DODGER_BLUE_2_COLOR,
    borderRadius: 8,
    padding: "16px 24px",
    marginTop: theme.spacing(4),
  },
}));

export default LoginPages;
