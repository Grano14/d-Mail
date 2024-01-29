import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.js';
import LateralButton from './components/LateralButtons.js';
import MailList from './components/MailList.js';
import Web3 from 'web3';
import ethImage from './components/images/ethereum.png';
import sendImage from './components/images/send.png';


const App = () => {

  {/*---------------variable enad function to calculate the height o the web page dinamically--------------*/}
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const updateScreenHeight = () => {
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenHeight);
    return () => {
      window.removeEventListener('resize', updateScreenHeight);
    };
  }, []);
  {/*------------------------------------------------------------------------------------------------------*/}

  {/*------inizializzation of the web3 and accounts variables, functions for the init web3 and search or a provider-------*/}
  const [auth, setAuth] = useState(false);
  var web3;
  var accounts = null;
  async function initWeb3(){
    //check if metamask is avaliable
    if(window.ethereum){
      try{
        //get the account address connected to the website
        const connectedAccounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        accounts = connectedAccounts;
      } catch(error){
        //if error.code is 4001, user rejected the request
        if(error.code === 4001){
          console.log("User didn't allow access to the website!");
          return false;
        }
      }
      web3 = new Web3('http://localhost:7545');
      //if accounts is not null, some accounts are connected
      if(accounts === null){
        return false;
      } else{
        return true;
      }
    }
    else{
      console.log("Metamask not installed!");
      alert('Metamask not found! To procede you need to install Metamask.');
      return false;
    }
  };

  //this function check if an account is already connected, otherwise call the initWeb3 to send a connection request to the user 
  async function checkConnection(){
    if(window.ethereum){
      accounts = await window.ethereum.request({method: 'eth_accounts'});
      if(accounts.length !== 0){
        setAuth(true);
        web3 = new Web3('http://localhost:7545');
      } else {initWeb3();}
    }
    else{
      console.log('Metamask not installed!');
    }
  };

  //the checkConnection function is called
  checkConnection();

  //authentication function, the function call the initWeb3 to initialize the web3, provider and send the request to the user
  async function authentication(){
    setAuth(await initWeb3());
  };

  {/*------------------------------------------------------------------------------------------------------*/}

  //if user is authenticated, display the home page, otherwise display the login page
  if(auth){
    return (
      //home page
      <>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <div style={{width: '20%', height: `${(screenHeight - 56)}px`, backgroundColor: '#05061a' }}>
            <LateralButton />
          </div>
          <div style={{width: '80%', height: `${(screenHeight - 56)}px`, backgroundColor: '#052122', overflowY: 'auto' }}>
            <MailList />
          </div>
        </div>
      </>
    );
  }
  else{
    return (
      //login page
      <div style={{height: `${(screenHeight)}px`, width: '100%', backgroundColor: '#051128'}}>
            <div className="container text-center" style={{paddingTop: '100px'}}>
                <div className="row align-items-center">
                    <div className="col" style={{borderRadius: '5px', backgroundColor: '#05061a', textAlign:'left'}}>
                        <h3 style={{marginTop: '20px'}}>d-Mail</h3>
                        This is a DAPP based on the Ethereum blockchain that allow<br></br>
                        you to send mail without any email address and registration.<br></br>
                        To use the d-Mail DAPP you only need the Ethereum address<br></br>
                        and the Metamask provider installed in your browser.<br></br>
                        Click the access button below to authenticate throw Metamask<br></br>
                        and you can start send mail!<br></br>
                        <button className="btn btn-primary" style={{marginTop: '20px', marginBottom: '20px'}} onClick={authentication}>Access</button>
                    </div>
                    <div className="col">
                    <div style={{margin: '20px'}}><img src={ethImage} className="img-fluid" alt="..." width="140" height="140"></img><p></p></div>
                    <img src={sendImage} className="img-fluid" alt="..." width="240" height="240"></img>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
};

export default App;

