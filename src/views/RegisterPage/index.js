import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import { connect } from "react-redux";
import { fetch } from "redux/apis";
import { POST } from "redux/apis";
import { getLogin, errLogin } from "redux/actions";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { Check, FiberPin } from "@material-ui/icons";

const useStyles = makeStyles(styles);

const RegisterPage = ({ rest, actLogin, load, dataCustom, history }) => {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [koperasi, setKoperasi] = React.useState(true);
  const [induk, setInduk] = React.useState(false);

  if (dataCustom.input.email) {
    setTimeout(function () {
      setEmail(dataCustom.input.email);
    }, 700);
  }
  if (dataCustom.input.pass) {
    setTimeout(function () {
      setPass(dataCustom.input.pass);
    }, 700);
  }
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Mari Bergabung</h4>
                    <div className={classes.socialLine}>
                      <Button
                        color={koperasi ? "info" : "transparent"}
                        onClick={() => setKoperasi(true)}
                      >
                        <h6>Koperasi</h6>
                      </Button>

                      <Button
                        color={koperasi ? "transparent" : "info"}
                        onClick={() => setKoperasi(false)}
                      >
                        <h6>Member</h6>
                      </Button>
                    </div>
                  </CardHeader>
                  {koperasi ? (
                    <div className={classes.checkBox}>
                      <Button
                        justIcon
                        color={induk ? "info" : "transparent"}
                        style={{
                          border: "1px solid black",
                        }}
                        onClick={() => setInduk(!induk)}
                      >
                        {induk ? <Check /> : null}
                      </Button>
                      <h6 style={{ marginLeft: 20, width: 200 }}>
                        Mau Mendaftar sebagai Koperasi Induk ?
                      </h6>
                    </div>
                  ) : null}

                  <CardBody>
                    {koperasi ? (
                      induk ? null : (
                        <CustomInput
                          labelText="Nomor Sistem Koperasi"
                          id="nisKop"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <FiberPin className={classes.inputIconsColor} />
                              </InputAdornment>
                            ),
                          }}
                        />
                      )
                    ) : (
                      <CustomInput
                        labelText="Nomor Sistem Member"
                        id="nisMember"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <FiberPin className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  </CardBody>
                  <CardFooter className={classes.cardFooter}></CardFooter>
                </form>
                <div
                  style={{ marginLeft: 40, marginRight: 40, marginBottom: 20 }}
                >
                  <Button
                    fullWidth
                    color="primary"
                    size="lg"
                    onClick={() =>
                      koperasi
                        ? history.push("/register-koperasi")
                        : history.push("/register-member")
                    }
                  >
                    Daftar Sekarang
                  </Button>
                </div>
                <Button
                  simple
                  color="primary"
                  size="lg"
                  onClick={() => history.push("/login-page")}
                >
                  Login
                </Button>
              </Card>
            </GridItem>
          </GridContainer>
        </div>

        <Footer whiteFont />
      </div>
    </div>
  );
};
const mapsPropsToState = ({ auth, custom }) => {
  const dataAuth = auth;
  const dataCustom = custom;
  return { dataAuth, dataCustom };
};
const mapsDispatchToProp = (dispatch) => ({
  actLogin: (params) => {
    fetch(POST, "auth/login", params)
      .then((res) => {
        dispatch(getLogin(res));
      })
      .catch((err) => {
        dispatch(errLogin(err));
      });
  },
});
export default connect(mapsPropsToState, mapsDispatchToProp)(RegisterPage);
