import '../styles/globals.css'
import Layout from "../components/Layout"
import "../src/config_Amplify"
import {useState} from "react";
function MyApp({ Component, pageProps }) {
   const [dashboard, setDashboard] = useState(true);
  return (
    <Layout dashboard={dashboard} setDashboard={setDashboard}>
      <Component
        {...pageProps}
        dashboard={dashboard}
        setDashboard={setDashboard}
      />
    </Layout>
  ); 
}

export default MyApp
