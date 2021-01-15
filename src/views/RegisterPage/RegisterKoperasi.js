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
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/registerPage.js";

import image from "assets/img/bg7.jpg";
import { connect } from "react-redux";
import { fetch } from "redux/apis";
import { getProvinsi, errorProvinsi } from "redux/actions";
import {
  Cancel,
  InsertDriveFile,
  Map,
  Store,
  VpnKey,
} from "@material-ui/icons";
import CustomDropdown from "components/CustomDropdown/CustomDropdown";
import { GET } from "redux/apis";
import { getKota } from "redux/actions";
import { errorKota } from "redux/actions";
import { errorKelurahan } from "redux/actions";
import { getKelurahan } from "redux/actions";
import { errorKecamatan } from "redux/actions";
import { getKecamatan } from "redux/actions";
import GridContainer from "components/Grid/GridContainer";
import { UPLOAD } from "redux/apis";
import { uploadBerhasil } from "redux/actions";
import { uploadGagal } from "redux/actions";

const useStyles = makeStyles(styles);

const RegisterKoperasi = ({
  provinsi,
  rest,
  dataCustom,
  dataLokasi,
  city,
  kecamatan,
  kelurahan,
  uploadData,
}) => {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [nama, setNama] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [passConfirm, setPassConfirm] = React.useState("");

  if (dataCustom.input.nama) {
    setTimeout(function () {
      setNama(dataCustom.input.nama);
    }, 700);
  }
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
  if (dataCustom.input.passConfirm) {
    setTimeout(function () {
      setPassConfirm(dataCustom.input.passConfirm);
    }, 700);
  }

  const [tel, setTel] = React.useState("");
  const [telepon, setTelepon] = React.useState([]);

  const [what, setWhat] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState([]);
  const [blank, setBlank] = React.useState("");

  if (dataCustom.input.telepon) {
    setTimeout(function () {
      setTel(dataCustom.input.telepon);
    }, 700);
  }
  if (dataCustom.input.whatsapp) {
    setTimeout(function () {
      setWhat(dataCustom.input.whatsapp);
    }, 700);
  }

  const [alamat, setAlamat] = React.useState("");
  const [zipcode, setZipcode] = React.useState("");

  if (dataCustom.input.alamat) {
    setTimeout(function () {
      setAlamat(dataCustom.input.alamat);
    }, 700);
  }
  if (dataCustom.input.zipcode) {
    setTimeout(function () {
      setZipcode(dataCustom.input.zipcode);
    }, 700);
  }

  const [siup, setSIUP] = React.useState("");
  const [tdp, setTDP] = React.useState("");
  const [akta, setAkta] = React.useState("");
  const [profile, setProfile] = React.useState("");

  if (dataCustom.input.siup_nomor) {
    setTimeout(function () {
      setSIUP(dataCustom.input.siup_nomor);
    }, 700);
  }
  if (dataCustom.input.tdp_nomor) {
    setTimeout(function () {
      setTDP(dataCustom.input.tdp_nomor);
    }, 700);
  }
  if (dataCustom.input.akta_nomor) {
    setTimeout(function () {
      setAkta(dataCustom.input.akta_nomor);
    }, 700);
  }
  if (dataCustom.input.namaProfil) {
    setTimeout(function () {
      setProfile(dataCustom.input.namaProfil);
    }, 700);
  }

  const [prov, setProv] = React.useState([]);
  const [kota, setKota] = React.useState([]);
  const [camat, setCamat] = React.useState([]);
  const [lurah, setLurah] = React.useState([]);

  const [provpilih, setProvpilih] = React.useState(null);
  const [kotapilih, setKotapilih] = React.useState(null);
  const [camatpilih, setCamatpilih] = React.useState(null);
  const [lurahpilih, setLurahpilih] = React.useState(null);

  if (!dataLokasi.provinsi.status) {
    provinsi();
  } else {
    setTimeout(function () {
      setProv(dataLokasi.provinsi.data);
    }, 700);
  }

  if (dataLokasi.kota.status) {
    setTimeout(function () {
      setKota(dataLokasi.kota.data);
    }, 700);
  }
  if (dataLokasi.camat.status) {
    setTimeout(function () {
      setCamat(dataLokasi.camat.data);
    }, 700);
  }
  if (dataLokasi.lurah.status) {
    setTimeout(function () {
      setLurah(dataLokasi.lurah.data);
    }, 700);
  }

  setTimeout(function () {
    setCardAnimation("");
  }, 700);

  const classes = useStyles();

  const addTelepon = () => {
    setTelepon(telepon.concat(tel));
    setBlank("telepon");
    setTimeout(function () {
      setBlank("");
    }, 300);
  };
  const addWhatsapp = () => {
    setWhatsapp(whatsapp.concat(what));
    setBlank("whatsapp");
    setTimeout(function () {
      setBlank("");
    }, 300);
  };
  const deleteTelepon = (index) => {
    setTelepon(telepon.filter((res, i) => i !== index));
  };

  const [siup_img, setSIUP_img] = React.useState(null);
  const [tdp_img, setTDP_img] = React.useState(null);
  const [akta_img, setAKTA_img] = React.useState(null);
  const [profil_img, setProfil_img] = React.useState(null);

  if (dataCustom.input.siup_img) {
    setTimeout(function () {
      setSIUP_img({
        owner: "cooperative",
        uri: dataCustom.input.siup_img,
        fileName: "siup" + siup + nama + email,
      });
    }, 700);
  }
  if (dataCustom.input.tdp_img) {
    setTimeout(function () {
      setTDP_img({
        owner: "cooperative",
        uri: dataCustom.input.tdp_img,
        fileName: "tdp" + siup + nama + email,
      });
    }, 700);
  }
  if (dataCustom.input.akta_img) {
    setTimeout(function () {
      setAKTA_img({
        owner: "cooperative",
        uri: dataCustom.input.akta_img,
        fileName: "tdp" + siup + nama + email,
      });
    }, 700);
  }
  if (dataCustom.input.profil_img) {
    setTimeout(function () {
      setProfil_img({
        owner: "cooperative",
        uri: dataCustom.input.profil_img,
        fileName: "tdp" + siup + nama + email,
      });
    }, 700);
  }
  const siupSelected = (event) => {
    setSIUP_img({
      owner: "cooperative",
      uri: event.target.value,
      fileName: event.target.files[0],
    });
  };
  const tdpSelected = (event) => {
    setTDP_img({
      owner: "cooperative",
      uri: event.target.value,
      fileName: event.target.files[0],
    });
  };

  const aktaSelected = (event) => {
    setAKTA_img({
      owner: "cooperative",
      uri: event.target.value,
      fileName: event.target.files[0],
    });
  };
  const profilSelected = (event) => {
    setProfil_img({
      owner: "cooperative",
      uri: event.target.value,
      fileName: event.target.files[0],
    });
  };

  return (
    <div>
      <Header
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 10,
          color: "white",
        }}
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
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <h3 className={classes.title}>Data Koperasi</h3>
                  <CardBody>
                    <div className={classes.baris}>
                      <CustomInput
                        labelText="Nama Koperasi"
                        id="nama"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Store className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <div className={classes.batas} />
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <div className={classes.baris}>
                      <div style={{ flex: 1 }}>
                        <CustomInput
                          key="zzzzzzz"
                          labelText="No. Telepon"
                          id="telepon"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          blank={blank === "telepon"}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <Button
                                color="info"
                                size="sq"
                                onClick={() => addTelepon()}
                              >
                                <Icon
                                  className={classes.inputIconsColor}
                                  style={{ color: "white" }}
                                >
                                  add
                                </Icon>
                              </Button>
                            ),
                            autoComplete: "off",
                          }}
                        />
                        {telepon.map((items, index) => {
                          return (
                            <div
                              key={index}
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <p>{items}</p>
                              <Cancel
                                style={{ marginLeft: "10px" }}
                                onClick={() => deleteTelepon(index)}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <div className={classes.batas} />
                      <div style={{ flex: 1 }}>
                        <CustomInput
                          labelText="No. Whatsapp"
                          id="whatsapp"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          blank={blank === "whatsapp"}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <Button
                                color="info"
                                size="sq"
                                onClick={() => addWhatsapp()}
                              >
                                <Icon
                                  className={classes.inputIconsColor}
                                  style={{ color: "white" }}
                                >
                                  add
                                </Icon>
                              </Button>
                            ),
                            autoComplete: "off",
                          }}
                        />
                        {whatsapp.map((items, index) => {
                          return (
                            <div
                              key={index}
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <p>{items}</p>
                              <Cancel
                                style={{ marginLeft: "10px" }}
                                onClick={() => deleteTelepon(index)}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className={classes.baris}>
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <VpnKey className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <div className={classes.batas} />
                      <CustomInput
                        labelText="Password Confirm..."
                        id="passConfirm"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <VpnKey className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <CustomInput
                      labelText="Alamat..."
                      id="alamat"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      multiline
                      inputProps={{
                        type: "textarea",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Map className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <div className={classes.lokasiDrop}>
                      <CustomDropdown
                        dropup
                        buttonText={provpilih ? provpilih.name : "Provinsi"}
                        dropdownHeader="Pilih Provinsi"
                        buttonProps={{
                          round: true,
                          className: classes.navLink,
                          color: "info",
                        }}
                        dropdownList={prov.map((items) => {
                          return (
                            <div
                              className={classes.clickLokasi}
                              onClick={() => {
                                setProvpilih(items);
                                city(items.id);
                              }}
                            >
                              {items.name}
                            </div>
                          );
                        })}
                      />
                      <CustomDropdown
                        dropup
                        buttonText={
                          kotapilih ? kotapilih.name : "Kabupaten/Kota"
                        }
                        dropdownHeader="Dropdown Header"
                        buttonProps={{
                          round: true,
                          className: classes.navLink,
                          color: "info",
                        }}
                        dropdownList={kota.map((items) => {
                          return (
                            <div
                              className={classes.clickLokasi}
                              onClick={() => {
                                setKotapilih(items);
                                kecamatan(items.id);
                              }}
                            >
                              {items.name}
                            </div>
                          );
                        })}
                      />

                      <CustomDropdown
                        dropup
                        buttonText={camatpilih ? camatpilih.name : "Kecamatan"}
                        dropdownHeader="Dropdown Header"
                        buttonProps={{
                          round: true,
                          className: classes.navLink,
                          color: "info",
                        }}
                        dropdownList={camat.map((items) => {
                          return (
                            <div
                              className={classes.clickLokasi}
                              onClick={() => {
                                setCamatpilih(items);
                                kelurahan(items.id);
                              }}
                            >
                              {items.name}
                            </div>
                          );
                        })}
                      />

                      <CustomDropdown
                        dropup
                        buttonText={lurahpilih ? lurahpilih.name : "Kelurahan"}
                        dropdownHeader="Dropdown Header"
                        buttonProps={{
                          round: true,
                          className: classes.navLink,
                          color: "info",
                        }}
                        dropdownList={lurah.map((items) => {
                          return (
                            <div
                              className={classes.clickLokasi}
                              onClick={() => {
                                setLurahpilih(items);
                              }}
                            >
                              {items.name}
                            </div>
                          );
                        })}
                      />
                      <div className={classes.batas} />
                      <CustomInput
                        labelText="Kode Pos"
                        id="zipcode"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "number",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Store className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                  </CardBody>
                  <h3 className={classes.title}>Berkas Koperasi</h3>
                  <CardBody>
                    <label>SIUP/NIB</label>
                    <div
                      className={classes.baris}
                      style={{ alignItems: "center" }}
                    >
                      <input type="file" onChange={siupSelected} />
                      <div className={classes.batas} />
                      <CustomInput
                        labelText="Nomor SIUP"
                        id="siup_nomor"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <InsertDriveFile
                                className={classes.inputIconsColor}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <label>TDP</label>
                    <div
                      className={classes.baris}
                      style={{ alignItems: "center" }}
                    >
                      <input type="file" onChange={tdpSelected} />
                      <div className={classes.batas} />
                      <CustomInput
                        labelText="Nomor TDP"
                        id="tdp_nomor"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <InsertDriveFile
                                className={classes.inputIconsColor}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <label>Akta</label>
                    <div
                      className={classes.baris}
                      style={{ alignItems: "center" }}
                    >
                      <input type="file" onChange={aktaSelected} />
                      <div className={classes.batas} />
                      <CustomInput
                        labelText="Nomor Akta"
                        id="akta_nomor"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <InsertDriveFile
                                className={classes.inputIconsColor}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <label>Profil</label>
                    <div
                      className={classes.baris}
                      style={{ alignItems: "center" }}
                    >
                      <input type="file" onChange={profilSelected} />
                      <div className={classes.batas} />
                    </div>
                  </CardBody>

                  <CardFooter className={classes.cardFooter}>
                    <Button
                      fullWidth
                      color="primary"
                      size="lg"
                      onClick={() => {
                        console.log(
                          nama +
                            " " +
                            email +
                            " " +
                            pass +
                            " " +
                            passConfirm +
                            " " +
                            alamat +
                            " " +
                            zipcode +
                            " " +
                            siup +
                            " " +
                            tdp +
                            " " +
                            akta +
                            " " +
                            profile +
                            " " +
                            JSON.stringify(telepon) +
                            " " +
                            JSON.stringify(whatsapp) +
                            " " +
                            JSON.stringify(provpilih) +
                            " " +
                            JSON.stringify(kotapilih) +
                            " " +
                            JSON.stringify(camatpilih) +
                            " " +
                            JSON.stringify(lurahpilih) +
                            "" +
                            JSON.stringify(siup_img)
                        );
                        uploadData(akta_img);
                        setTimeout(function () {
                          uploadData(siup_img);
                        }, 700);
                        setTimeout(function () {
                          uploadData(tdp_img);
                        }, 1400);
                        setTimeout(function () {
                          uploadData(profil_img);
                        }, 2100);
                      }}
                    >
                      Daftar
                    </Button>
                  </CardFooter>
                </form>
                <Button simple color="primary" size="lg" onClick={() => 0}>
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

const mapsPropsToState = ({ auth, custom, lokasi }) => {
  const dataAuth = auth;
  const dataCustom = custom;
  const dataLokasi = lokasi;
  return { dataAuth, dataCustom, dataLokasi };
};
const mapsDispatchToProp = (dispatch) => ({
  provinsi: () => {
    fetch(GET, "location/province", {})
      .then((res) => {
        dispatch(getProvinsi(res));
      })
      .catch((err) => {
        dispatch(errorProvinsi(err));
      });
  },
  city: (kode) => {
    fetch(GET, `location/${kode}/city`, {})
      .then((res) => {
        dispatch(getKota(res));
      })
      .catch((err) => {
        dispatch(errorKota(err));
      });
  },
  kecamatan: (kode) => {
    fetch(GET, `location/${kode}/district`, {})
      .then((res) => {
        dispatch(getKecamatan(res));
      })
      .catch((err) => {
        dispatch(errorKecamatan(err));
      });
  },
  kelurahan: (kode) => {
    fetch(GET, `location/${kode}/village`, {})
      .then((res) => {
        dispatch(getKelurahan(res));
      })
      .catch((err) => {
        dispatch(errorKelurahan(err));
      });
  },
  uploadData: (data) => {
    fetch(UPLOAD, "storage/upload", data)
      .then((res) => {
        dispatch(uploadBerhasil(res));
      })
      .catch((err) => {
        dispatch(uploadGagal(err));
      });
  },
});
export default connect(mapsPropsToState, mapsDispatchToProp)(RegisterKoperasi);
