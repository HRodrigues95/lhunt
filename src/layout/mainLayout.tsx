import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";
import AppName from "../components/AppName";

export default function MainLayout() {
  return (
    <>
      <header className='bg-blue-ambient-100/70 p-5'>
        <AppName />
      </header>

      <Outlet />

      <AppFooter />
    </>
  )
}
