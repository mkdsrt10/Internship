import styles from "../../styles/Dashboardhome.module.css";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import data from "../../utility/data";
import Transaction_Table from "../Transaction_Table";
import { useEffect, useState } from "react";
import router from "next/router";
import Web3 from "web3";
import tokenABI from "../../utility/tokenABI";
import randomcolor from "randomcolor";
import tokenAddresses from "../../utility/tokenAddress";
const Home = () => {
  const d = new Date();
  const [Greetings, setGreetings] = useState("");
  const time = d.getHours();
  const [wallet, setWallet] = useState(false);
  const [Token, setToken] = useState([{}]);

  const ethEnabled = () => {
    if (window.web3 && window !== undefined) {
      window.web3 = new Web3(window.web3.currentProvider);
      window.ethereum.enable();
      if (window.web3.eth !== undefined) {
        setWallet(true);
      } else {
        setWallet(false);
      }
      return true;
    }
    return false;
  };
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
    const getAccounts = async () => {
      window.web3 = new Web3(window.web3.currentProvider);
      window.ethereum.enable();
      window.web3.eth.getAccounts().then((accounts) => {
        window.web3.eth
          .getTransactionCount(accounts[0])
          .then((b = console.log) => {
            console.log(b);
            for (var i = 0; i < b; i++) {
              window.web3.eth.getBlock(b - i).then((Block) => {
                const a = [Block.hash];
                console.log(a);
                var iterator = a.values();
                for (let elements of iterator) {
                  window.web3.eth
                    .getTransactionFromBlock(elements)
                    .then(console.log);
                }
              });
            }
          });
      });
    };
    const getTokens = async () => {
      window.web3 = new Web3(window.web3.currentProvider);
      window.ethereum.enable();
      window.web3.eth.getAccounts().then(async (accounts) => {
        const balance = await web3.eth.getBalance(accounts[0]);
        console.log("balance :", balance);
        const TokenDetails = [];
        TokenDetails.push({
          token: "ETH",
          balance: balance,
          fill: randomcolor({ luminosity: "bright" }),
        });
        const tokenBalances = await Promise.all(
          tokenAddresses.map(async (token) => {
            const tokenInst = new web3.eth.Contract(tokenABI, token.address);
            const balance = await tokenInst.methods
              .balanceOf(accounts[0])
              .call();
            console.log("balance: ", balance);
            console.log("token name :", token.token);
            console.log("tokenBalances : ", tokenBalances);
            TokenDetails.push({
              token: token.token,
              balance: 1,
              fill: randomcolor({ luminosity: "bright" }),
            });

            return {
              token: token.token,
              balance,
            };
          })
        );
        setToken(TokenDetails);
        console.log(TokenDetails);
        return {
          balance: window.web3.utils.fromWei(balance, "ether"),
          tokens: tokenBalances,
        };
      });
    };
    if (!ethEnabled) {
      alert("Please install MetaMask to use this dApp!");
    } else {
      window.web3 = new Web3(window.web3.currentProvider);
      window.ethereum.enable();
      if (window.web3.eth !== undefined) {
        getAccounts();
        getTokens();
        setWallet(true);
      } else {
        setWallet(false);
      }
    }
  }, []);

  const ViewNgoPageHandler = (e) => {
    router.push("/NGO/vipnipvin");
  };
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
            <button onClick={ethEnabled}>CONNECT YOUR WALLET</button>
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
                {Token.map((token, index) => {
                  return (
                    <ul key={index}>
                      <div style={{ color: token.fill }}>
                        <li>{`${token.balance}  ` + token.token}</li>
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
