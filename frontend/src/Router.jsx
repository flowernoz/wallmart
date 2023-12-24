import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import SinglePage from "./components/singlePage/SinglePage";
import Header from "./components/header/Header";
import Cart from "./routes/cart/Cart";
import Categories from "./components/Categories/Categories";
import Admin from "./routes/admin/Admin";
import Login from "./routes/login/Login";
import { Auth } from "./routes/login/Auth";
import CreateData from "./routes/admin/CreateData/CreateData";
import Carts from "./routes/admin/Carts/Carts";
import Register from "./routes/register/Register";
import Main from "./Main";
import Account from "./routes/admin/Account/Account";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Categories />} />
          <Route path="/single-page/:id" element={<SinglePage />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />

        <Route path="/admin" element={<Auth />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="/admin/create" element={<CreateData />} />
            <Route path="/admin/alldata" element={<Carts />} />
          </Route>
        </Route>
        <Route path="/admin/create" element={<CreateData />} />
        <Route path="/admin/alldata" element={<Carts />} />
      </Routes>
    </div>
  );
}

export default Router;
