import '../styles/globals.css'
import Layout from "../components/Layout"
import "../src/config_Amplify"
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ); 
}

export default MyApp
