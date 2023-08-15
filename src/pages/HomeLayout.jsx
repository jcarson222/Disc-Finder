import { Outlet } from "react-router-dom";
import { Nav } from "../components";

const HomeLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
export default HomeLayout;
