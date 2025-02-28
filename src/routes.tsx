import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/mainLayout";
import Island from "./pages/Island";

const AuthContext = createContext({ isAuthenticated: false });

export default function AppRoutes() {


  return (
    <AuthContext.Provider value={{ isAuthenticated: false }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/callback" element={<Home />} />

          <Route element={<MainLayout />}>
            <Route path="/island" element={<Island />} />
          </Route>

          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
