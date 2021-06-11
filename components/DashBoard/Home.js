import styles from "../../styles/Dashboardhome.module.css";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import data from "../../utility/data";
import Transaction_Table from "../Transaction_Table";
import { useEffect, useState } from "react";
import router from "next/router";
import { Bitski } from "bitski";
import tokenABI from "../../utility/tokenABI";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Authereum from "authereum";
import Web3 from "web3";

import Web3Modal from "web3modal";
const Home = ({Token}) => {
  const d = new Date();
  const [Greetings, setGreetings] = useState("");
  const time = d.getHours();
  const [wallet, setWallet] = useState(false);
  useEffect(() => {
    if (time >= 5 && time <= 12) {
      setGreetings("Good Morning");
    } else if (time >= 12 && time <= 16) {
      setGreetings("Good Afternoon");
    } else if (time >= 16 && time <= 21) {
      setGreetings("Good Evening");
    } else {
      setGreetings("Good Night");
    }
    ConnectWalletHandler();
  }, []);
  const ConnectWalletHandler=async(e)=>{
     const providerOptions = {
       walletconnect: {
         package: WalletConnectProvider, // required
         options: {
           infuraId: "INFURA_ID", // required
         },
       },
       bitski: {
         package: Bitski, // required
         options: {
           clientId: "BITSKI_CLIENT_ID", // required
           callbackUrl: "BITSKI_CALLBACK_URL", // required
         },
       },
       authereum: {
         package: Authereum, // required
       },
     };
     const web3Modal = new Web3Modal({
       network: "mainnet", // optional
       cacheProvider: true, // optional
       providerOptions, // required
     });

     const provider = await web3Modal.connect();
     const web3 = new Web3(provider);
     if(web3!=undefined){
       setWallet(true);
     }
    
  }
  const ViewNgoPageHandler=(e)=>{
    router.push("/NGO/vipnipvin")

  }
  const data01 = [
    { name: "Group A", value: 400, fill: "#cecece" },
    { name: "Group B", value: 300, fill: "#FF5733" },
    { name: "Group C", value: 300, fill: "#F9FF33" },
    { name: "Group D", value: 200, fill: "#3382FF" },
    { name: "Group E", value: 278, fill: "#6C33FF" },
    { name: "Group F", value: 189, fill: "#E733FF" },
  ];
  

  return (
    <div className={styles.home}>
      <div className={styles.good_morning}>{Greetings}</div>
      <div className={styles.name}>VIPIN</div>
      <div className={styles.overview}>
        <div className={styles.overview_name}>Overview</div>
        <div className={styles.overview_content}>
          <div className={styles.Page_view}>
            <div className={styles.Page_view_title}>
              Page View <span style={{ color: "#ef7c6e" }}>{"2000"}</span>
            </div>
            <div className={styles.Page_view_subtitle}>
              All time : {"10000"}
              <BarChart width={250} height={60} data={data}>
                <Bar dataKey="uv" fill="#ef7c6e" />
              </BarChart>
              <div className={styles.bar_chart_bottom}>
                <li>{"vipin"}</li>
                <li>{"vipin"}</li>
                <li>{"vipin"}</li>
              </div>
            </div>
          </div>
          <div className={styles.Donations_view}>
            <div className={styles.Donations_view_title}>
              Donations <span style={{ color: "#48B7B7" }}>{"2000"}</span>
            </div>
            <div className={styles.Donations_view_subtitle}>
              All time : {"10000"}
              <BarChart width={250} height={60} data={data}>
                <Bar dataKey="uv" fill="#48B7B7" />
              </BarChart>
              <div className={styles.bar_chart_bottom}>
                <li>{"vipin"}</li>
                <li>{"vipin"}</li>
                <li>{"vipin"}</li>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.Donation}></div>
      </div>
      <div className={styles.quickActions}>
        <div className={styles.quickActions_name}>Quick Actions</div>
        <div className={styles.quickActions_container}>
          <div className={styles.quickActions_items}>
            <div>Send Updates{"->"}</div>
          </div>
          <div className={styles.quickActions_items}>
            <div onClick={ViewNgoPageHandler}>View NGO page{"->"}</div>
          </div>
          <div className={styles.quickActions_items}>
            <div>Edit NGO Details{"->"} </div>
          </div>
          <div className={styles.quickActions_items}>
            <div>Check Resource{"->"}</div>
          </div>
        </div>
      </div>
      <div className={styles.walet}>
        <div className={styles.wallet_title}>Wallet Overview</div>
        {wallet == false ? (
          <div className={styles.connect_wallet}>
            <button onClick={ConnectWalletHandler}>CONNECT YOUR WALLET</button>
            <div>Read about wallets here</div>
          </div>
        ) : (
          <div>
            <div className={styles.wallet_chart}>
              <PieChart width={400} height={400} className={styles.pie_chart}>
                <Pie
                  dataKey="balance"
                  isAnimationActive={false}
                  data={Token}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                />
                <Tooltip />
              </PieChart>
              <div className={styles.list_items}>
                {Token.map((token,index) => {
                  return (
                    <ul key={index}>
                      <div style={{color:token.fill}} >
                        <li>{ `${token.balance}  `+token.token }</li>
                      </div>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className={styles.transaction}>
              <div className={styles.transaction_title}>Transaction</div>
              <Transaction_Table />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
