import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
type ModalProps = {
  open: any;
  handleClose: any;
  handleWalletDisconnect:any
};
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 35;
  const left = 45;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    ["@media (max-width:414px)"]: {
      top: "30%",
      left: "35%",
    },
  };
}
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    fontFamily: "ABeeZeeRegular !important",
    borderRadius: "16px",
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    // backgroundImage: "linear-gradient(to  top, #ECF8FF, #FFF6F8)"
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    ["@media (max-width:414px)"]: {
      width: 300,
    },
  },
  heading: {
    fontFamily: "ABeeZeeRegular !important",
    textAlign: "center",
    fontWeight: 400,
    padding: "0px 20px 0px 20px",
    color: "#1049F0",
    fontSize: "24px",
  },
  icon: {
    border: "1px dotted #0E47EF",
    textAlign: "center",
    borderRadius: "100%",
    padding: "25px",
    backgroundImage: "linear-gradient(to top, #ffffff, #FFF6F8)",
  },
  plr: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  arrow: {
    marginTop: "50px",
    color: "#CCCCCC",
    cursor: "pointer",
  },
 
  
  delegateButton: {
    width: "100%",
    padding: "12px",
    color: "#ffffff",
    borderRadius: "10px",
    backgroundColor: "#E84F7D",
    border: "none",
    fontSize: "14px",
    cursor: "pointer",
    fontFamily: "ABeeZeeRegular !important",
    marginTop:"5px",
    "& a":{
        color:"#ffffff",
        fontFamily: "ABeeZeeRegular !important",
        textDecoration:"none"
    }
  },
  closeButton: {
    position: "absolute",
    right: "24px",
    color: "#CCCCCC",
    fontWeight: 400,
    cursor: "pointer",

  },
 
  
  delegateVoteHead: {
    textAlign: "center",
    fontWeight: 400,
    padding: "25px",
    color: "#1049F0",
    fontSize: "24px",
    borderRadius: "15px 15px 0px 0px",
    boxShadow: "inset 0px -1px 0px #ECECEC",
 
    backgroundImage: "linear-gradient(to  top, #ffffff, #FFF7F8)",
  },
}));
function Alert({
  open,
  handleClose,
  handleWalletDisconnect
}: ModalProps) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.heading}>
            <Paper className={classes.delegateVoteHead}>
              {" "}
              Alert
              <span
                className={classes.closeButton}
                onClick={handleClose}
              >
                x
              </span>
            </Paper>
          </Grid>
        </Grid>

        <div style={{ borderTop: "1px solid #CCCCCC" }}></div>
        <Grid container spacing={3} className={classes.plr}>
          <Grid item xs={12} style={{ padding: "30px" }}>
          <p style={{ textAlign: "center", color:"#1049F0" }}> Do you want to disconnect your wallet?</p>         
          <button className={classes.delegateButton} onClick={handleWalletDisconnect}>
               Confirm 
            </button>
          </Grid>
          
        </Grid>
      </div>
    </Modal>
  );
}

export default Alert;
