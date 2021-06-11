import { useEffect, useState } from "react";
import Home from "../../components/DashBoard/Home";
import styles from "../../styles/Dashboard.module.css";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { Bitski } from "bitski";
import tokenABI from "../../utility/tokenABI";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Authereum from "authereum";
import { withSSRContext } from "aws-amplify";
import "../../src/config_Amplify";
import { menu_items } from "../../utility/constant";
import { useRouter } from "next/router";
import randomcolor from "randomcolor";
import tokenAddresses from "../../utility/tokenAddress"

const ui = "Home";
const DashBoard = ({ user, dashboard, setDashboard }) => {
  const [Token, setToken] = useState([{}]);
  useEffect(async () => {
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
    const getAccounts = async () => {
      web3.eth.getAccounts().then((accounts) => {
        web3.eth.getTransactionCount(accounts[0]).then((b = console.log) => {
          console.log(b);
          for (var i = 0; i < b; i++) {
            web3.eth.getBlock(b - i).then((Block) => {
              const a = [Block.hash];
              console.log(a);
              var iterator = a.values();
              for (let elements of iterator) {
                web3.eth.getTransactionFromBlock(elements).then(console.log);
              }
            });
          }
        });
      });
    };

    const getTokens = async () => {
     
      web3.eth.getAccounts().then(async (accounts) => {
        const balance = await web3.eth.getBalance(accounts[0]);
        console.log("balance :", balance);
        const TokenDetails = [];
        TokenDetails.push({ token: "ETH", balance: 1, fill: randomcolor({luminosity:"bright"}) });
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
          balance: web3.utils.fromWei(balance, "ether"),
          tokens: tokenBalances,
        };
      });
    };

    getAccounts();
    getTokens();
    setDashboard(false);
  }, []);

  const router = useRouter();
  return (
    <div className={styles.main_container}>
      <div className={styles.DashBoard}>
        <div className={styles.DashBoard_menu}>
          <div
            className={styles.logo}
            onClick={(e) => {
              router.push("/");
            }}
          >
            Crypto<span>Funds</span>
          </div>
          {menu_items.map((item, index) => {
            return (
              <div
                className={
                  ui == item.name
                    ? styles.DashBoard_menu_items_active
                    : styles.DashBoard_menu_items
                }
                key={index}
                onClick={(e) => {
                  router.push("/dashboard/" + item.url);
                }}
              >
                <img src={"/" + item.image + ".png"} />
                {item.name}{" "}
              </div>
            );
          })}
          <div className={styles.menu_bottom_user}>
            <img src="/girl_mobile.png" />
            <div className={styles.user_data}>
              <div className={styles.user_name}>{"Mayank"}</div>
              <div className={styles.user_email}>{"cf.w/ngo1"}</div>
            </div>
          </div>
        </div>
        <div className={styles.DashBoard_content}>
          <Home Token={Token} />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { Auth } = withSSRContext(context);
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user);
    return {
      props: {
        user: true,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        permanent: false,
        destination: "/auth/profile",
      },
    };
  }
};

export default DashBoard;
