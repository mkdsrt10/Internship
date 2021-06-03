import styles from "../../styles/Dashboardhome.module.css";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

import Transaction_Table from "../Transaction_Table";
import { useEffect, useState } from "react";
const Home = () => {
  const d = new Date();
  const [Greetings, setGreetings] = useState("");
  const time = d.getHours();
  const [wallet, setWallet] = useState(true);
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
  }, []);
  const data01 = [
    { name: "Group A", value: 400, fill: "#cecece" },
    { name: "Group B", value: 300, fill: "#FF5733" },
    { name: "Group C", value: 300, fill: "#F9FF33" },
    { name: "Group D", value: 200, fill: "#3382FF" },
    { name: "Group E", value: 278, fill: "#6C33FF" },
    { name: "Group F", value: 189, fill: "#E733FF" },
  ];
  const data = [
    {
      name: "Page A",
      uv: 4000,
    },
    {
      name: "Page B",
      uv: 3000,
    },
    {
      name: "Page C",
      uv: 2000,
    },
    {
      name: "Page D",
      uv: 2780,
    },
    {
      name: "Page E",
      uv: 1890,
    },
    {
      name: "Page F",
      uv: 2390,
    },
    {
      name: "Page G",
      uv: 3490,
    },
    {
      name: "Page H",
      uv: 4000,
    },
    {
      name: "Page I",
      uv: 3000,
    },
    {
      name: "Page J",
      uv: 2000,
    },
    {
      name: "Page K",
      uv: 2780,
    },
    {
      name: "Page L",
      uv: 1890,
    },
    {
      name: "Page M",
      uv: 2390,
    },
    {
      name: "Page N",
      uv: 3490,
    },
    {
      name: "Page O",
      uv: 2000,
    },
    {
      name: "Page P",
      uv: 2780,
    },
    {
      name: "Page Q",
      uv: 1890,
    },
    {
      name: "Page R",
      uv: 2390,
    },
    {
      name: "Page S",
      uv: 3490,
    },
    {
      name: "Page T",
      uv: 2000,
    },
    {
      name: "Page U",
      uv: 2780,
    },
    {
      name: "Page V",
      uv: 1890,
    },
    {
      name: "Page W",
      uv: 2390,
    },
    {
      name: "Page X",
      uv: 3490,
    },
    {
      name: "Page Y",
      uv: 2780,
    },
    {
      name: "Page Z",
      uv: 1890,
    },
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
            <div>View NGO page{"->"}</div>
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
            <button>CONNECT YOUR WALLET</button>
            <div>Read about wallets here</div>
          </div>
        ) : (
          <div className={styles.wallet_chart}>
              <PieChart width={400} height={400} className={styles.pie_chart}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data01}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                />
                <Tooltip />
              </PieChart>
            <div className={styles.list_items}>
              {data01.map((data) => {
                return (
                  <ul>
                    <div style={{ color: data.fill }}>
                      <li>{data.name + `(${data.value})`}</li>
                    </div>
                  </ul>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className={styles.transaction}>
        <div className={styles.transaction_title}>Transaction</div>
        <Transaction_Table />
      </div>
    </div>
  );
};

export default Home;
