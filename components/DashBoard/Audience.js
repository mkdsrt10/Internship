import { useState } from "react";
import styles from "../../styles/DashboardAudience.module.css";
import Transaction_Table from "../Transaction_Table";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
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

const Audience = () => {
  const [graph, setgraph] = useState("people");
  return (
    <div className={styles.main_container}>
      <div className={styles.head}>
        <div className={styles.head_greetings}>Say Hi! to your backers</div>
        <div className={styles.head_title}>Backers</div>
      </div>
      <div className={styles.overview_container}>
        <div className={styles.overview_container_head}>
          <div className={styles.overview_title}>Overview</div>
          <div className={styles.overview_right}>
            <ul>
              <li
                className={
                  graph == "people" ? styles.active_li_people : styles.people
                }
                onClick={() => setgraph("people")}
              >
                People
              </li>
              <li
                className={
                  graph == "Donation"
                    ? styles.active_li_Donation
                    : styles.donation
                }
                onClick={() => setgraph("Donation")}
              >
                Donation
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.graph}>
          <ResponsiveContainer>
            <AreaChart
              data={data}
              type="triangle"
              margin={{
                top: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="triangle"
                dataKey="uv"
                stroke="#8884d8"
                fill="#F7931A"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className={styles.search}>
        <div className={styles.search_icon}>
          <img src="/search.svg" />
        </div>
        <div>
          <input placeholder="Search" />
        </div>
        <div className={styles.add_people}>
          <img src="/user-plus.svg" /> Add people
        </div>
        <div className={styles.download}>
          <img src="/download.svg" />
        </div>
      </div>
      <div className={styles.transaction}>
        <Transaction_Table />
      </div>
    </div>
  );
};

export default Audience;
