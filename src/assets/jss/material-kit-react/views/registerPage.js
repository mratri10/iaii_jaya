import { container } from "assets/jss/material-kit-react.js";

const signupPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "10vh",
    color: "#FFFFFF",
    paddingBottom: "200px",
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)",
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF",
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
    },
  },
  form: {
    margin: "0",
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px",
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center",
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important",
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0",
  },
  inputIconsColor: {
    color: "#495057",
  },
  baris: {
    display: "inline",
    "@media (min-width: 576px)": {
      display: "inline",
    },
    "@media (min-width: 768px)": {
      display: "inline",
    },
    "@media (min-width: 992px)": {
      display: "flex",
    },
    "@media (min-width: 1200px)": {
      display: "flex",
    },
  },
  barisTanggal: {
    display: "inline",
    "@media (min-width: 576px)": {
      display: "inline",
    },
    "@media (min-width: 768px)": {
      display: "flex",
    },
    "@media (min-width: 992px)": {
      display: "flex",
    },
    "@media (min-width: 1200px)": {
      display: "flex",
    },
  },
  batas: {
    width: "0px",
    "@media (min-width: 576px)": {
      width: "0px",
    },
    "@media (min-width: 768px)": {
      width: "0px",
    },
    "@media (min-width: 992px)": {
      width: "50px",
    },
    "@media (min-width: 1200px)": {
      width: "50px",
    },
  },
  lokasiDrop: {
    display: "inline",
    "@media (min-width: 576px)": {
      display: "inline",
    },
    "@media (min-width: 768px)": {
      display: "inline",
    },
    "@media (min-width: 992px)": {
      display: "inline",
    },
    "@media (min-width: 1200px)": {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  clickLokasi: {
    minWidth: "160px",
    cursor: "pointer",
    borderWidth: 1,
  },
  title: {
    marginLeft: "20px",
  },
};

export default signupPageStyle;
