import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import AppNavbar from "../components/AppNavbar";

const AppLayout = () => {
    return ( <>
    <AppHeader />
    <AppNavbar />
    <Outlet />
    <AppFooter />
    </> );
}
 
export default AppLayout;