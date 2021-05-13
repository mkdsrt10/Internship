import NavBar from "./NavBar"
import Footer from "./Footer"
const Layout = ({children}) => {
    return (
      <div>
          <NavBar/>
        {children}
      </div>
    );
}
 
export default Layout;