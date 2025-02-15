import React from "react";
import Alert from "./Alert"
import addressTruncate from "../../helpers/addressTruncate";


type WalletProps = {
  provider: any;
  loadWeb3Modal: any;
  logoutOfWeb3Modal: any;
  accounts: any,
};

function WalletButton({
  provider,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  accounts,
}: WalletProps) {

  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClose = ()=>{
    setOpenAlert(false)
  }
  const handleWalletDisconnect = ()=>{
    if (provider) {
      logoutOfWeb3Modal();
    }
  }
  return (
    <>
     
      <button
        className={
          !provider
          ? "bg-connectedButton rounded-xl shadow-xl p-4 text-brandblue text-sm"
          : "bg-unconnectedButton text-white rounded-xl shadow-xl py-4 px-5 text-sm"
        }
        color="primary"
        onClick={() => {
          if (!provider) {
            loadWeb3Modal();
          } else {
            setOpenAlert(true)
            // logoutOfWeb3Modal();
          }
        }}
      >
        
        {!provider
          ? "Connect wallet"
          : addressTruncate(accounts)
        }{" "}
      </button>

      {openAlert && (
        <Alert open={openAlert} handleClose={handleClose} handleWalletDisconnect={handleWalletDisconnect}/>
      )}
    </>
  );
}


export default WalletButton;
