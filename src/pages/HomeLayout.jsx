import { Outlet } from "react-router-dom";
import { Nav, Footer } from "../components";

const HomeLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};
export default HomeLayout;
