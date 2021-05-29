import { style } from "@material-ui/system";
import { Bitski } from "bitski";

import WalletConnectProvider from "@walletconnect/web3-provider";
import Authereum from "authereum";

import styles from "../../styles/PublicNgo.module.css";
import Web3 from "web3";
import Web3Modal from "web3modal";
import Select from "react-select";
import { useState } from "react";
import options from "../../utility/crypto_options";
const PublicNgoPage = () => {
  const [form, setForm] = useState({
    amount: 0,
    crypto: "",
    name: "",
    email: "",
  });
  const connect_wallet = async (e) => {
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
    web3.eth.getAccounts().then((accounts) => {
        web3.eth
          .sendTransaction({
            from: accounts[0],
            to: "0x1494786A31398eeA2E4262857EC70147aed94220",
            value: form.amount,
          })
          .then(function (receipt) {
            console.log(receipt);
          });
    });
  };
  console.log()


  return (
    <div className={styles.main_container}>
      <div className={style.top}>
        <img src="/1.jpg" className={styles.top_image} />
      </div>
      <div className={styles.page_content}>
        <div className={styles.left}>
          <div className={styles.head}>
            <div>
              <img src="/girl_mobile.png" />
            </div>
            <div className={styles.title}>
              <span>Save the Children</span>
              <div>Come, lay the foundation of education. </div>
              <div className={styles.tag_name}>
                <div>Children</div>
                <div>Education</div>
                <div>India</div>
              </div>
            </div>

            <div>
              <button>Follow</button>
            </div>
          </div>
          <div className={styles.stats}>
            <div>
              <div1>Donors</div1>
              <br />
              <div2>1.3k</div2>
            </div>
            <div>
              <div1>Coins Raised</div1>
              <br />
              <div2>$10B+</div2>
            </div>
            <div>
              <div1>Coins In Action</div1>
              <br />
              <div2>$7B+</div2>
            </div>
          </div>
          <div className={styles.aboutus}>
            <div className={styles.aboutus_head}>
              <div>
                <span>About us</span>
              </div>
              <div className={styles.social_media_link}>
                <img
                  src="/twitter.png"
                  className={styles.social_media_link_img}
                />
                <img
                  src="/instagram.png"
                  className={styles.social_media_link_img}
                />
                <img
                  src="/linkedin.png"
                  className={styles.social_media_link_img}
                />
              </div>
            </div>
            <div className={styles.aboutus_description}>
              Save the Children is India’s leading independent child rights’
              NGO, which works in 18 states of the country. Beginning its
              journey in 2008 in India, and registered as ‘Bal Raksha Bharat’,
              we have changed the lives of more than 11 million (1.1 crore)
              children. We firmly believe that every child deserves the best
              chance for a bright future, which is why, we are fiercely
              committed to ensure that children not only survive, but thrive.
              With a bold ambition and a powerful vigilance, we do whatever it
              takes to save the children.
            </div>
            <div className={styles.aboutus_image_container}>
              <img src="/girl_mobile.png" className={styles.aboutus_image} />
              <img src="/girl_mobile.png" className={styles.aboutus_image} />
              <img src="/girl_mobile.png" className={styles.aboutus_image} />
            </div>
            <div>Primary area active: India</div>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <div>
              <span>Donate to Save the Children foundation</span>
            </div>
            <br />
            <div>
              Pledge a monthly/one-time donation to help NGO in their monthly
              operations
            </div>
            <div className={styles.form}>
              <div className={styles.input_field}>
                <label>
                  Name (Optional)
                  <br />
                  <input
                    placeholder="Enter your Name"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ name: e.target.value });
                    }}
                  />
                </label>
              </div>
              <div className={styles.input_field}>
                <label>
                  Email (Optional)
                  <br />
                  <input
                    placeholder="Enter your Email"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ email: e.target.value });
                    }}
                  />
                </label>
              </div>

              <label>
                Select Currency
                <br />
                <div className={styles.trasaction_details}>
                  <div>
                    <Select
                      className={styles.select}
                      options={options}
                      closeMenuOnSelect={true}
                      onChange={(e) => {
                        setForm({ crypto: e });
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Enter your Amount"
                      value={form.amount}
                      onChange={(e) => {
                        setForm(
                          { amount: e.target.value },
                          console.log(form.amount)
                        );
                      }}
                    />
                  </div>
                </div>
                <div className={styles.checkBox}>
                  <div>
                    <label>
                      <input type="checkbox" /> Pledge a monthly
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="checkbox" /> Subscribe to this NGO
                    </label>
                  </div>
                </div>
              </label>
              <button onClick={connect_wallet}>CONNECT YOUR WALLET</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cause}>
        <span>
          Cause
          <br />
        </span>
        <div className={styles.cause_grid}>
          <div className={styles.cause_single_item}>
            <img src="/girl_mobile.png" />
            <div>Title</div>
            <div>Raised</div>
          </div>
          <div className={styles.cause_single_item}>
            <img src="/girl_mobile.png" />
            <div>Title</div>
            <div>Raised</div>
          </div>
          <div className={styles.cause_single_item}>
            <img src="/girl_mobile.png" />
            <div>Title</div>
            <div>Raised</div>
          </div>
          <div className={styles.cause_single_item}>
            <img src="/girl_mobile.png" />
            <div>Title</div>
            <div>Raised</div>
          </div>
        </div>
      </div>
      <div className={styles.updates}>
        <span>
          Updates
          <br />
        </span>
        <div className={styles.updates_grid}>
          <div className={styles.updates_single_item}>
            <img src="/girl_mobile.png" />
            <div>Built school Playground in Sohagpur</div>
            <span>Read{">>"}</span>
          </div>
        </div>
      </div>
      <div className={styles.team}>
        <div className={styles.team_left}>
          <div className={styles.team_title}>Team</div>
          <div className={styles.team_members_list}>
            <div>
              <img src="/girl_mobile.png" />
              <br />
              <span>Mayank </span>
            </div>
            <div>
              <img src="/girl_mobile.png" />
              <br />
              <span>Mayank </span>
            </div>
            <div>
              <img src="/girl_mobile.png" />
              <br />
              <span>Mayank </span>
            </div>
          </div>
        </div>
        <div className={styles.team_right}>
          <div className={styles.office}>Office Address</div>
          <div className={styles.office_details}>
            <div>D32, Sector 50, Noida, U.P. India, 201301</div>
            <div>+91 8503936914, +91 9993046112</div>
            <div>https://www.savethechildren.in</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicNgoPage;
