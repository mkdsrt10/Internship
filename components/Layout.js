import NavBar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children ,dashboard,setDashboard }) => {
 
  return (
    <div>
      <Head>
        <title>Crypto funds for local cause</title>
      </Head>
      <NavBar dashboard={dashboard} setDashboard={setDashboard}/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
