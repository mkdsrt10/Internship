import NavBar from "./Navbar"
import Footer from "./Footer"
import Head from 'next/head'

const Layout = ({children}) => {
    return (
      <div>
      <Head>
        <title>Crypto funds for local cause</title>
      </Head>
          <NavBar/>
        {children}
        <Footer/>
      </div>
    );
}

export default Layout;
