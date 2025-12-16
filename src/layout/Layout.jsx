import Header from "../components/Header";
import "./Layout.scss";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
}
