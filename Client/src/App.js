import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom'
import './App.css';
import { AdminDashboard } from "./Pages/AdminDashboard/AdminDashboard";
import { AdminLogin } from "./Pages/AdminLogin/AdminLogin";
import {Home} from './Pages/Home/Home'
import {Upload} from './Pages/Upload/Upload'
import {Update} from './Pages/Update/Update'
import {Delete} from './Pages/Delete/Delete'
import { About } from "./Pages/About/About";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails";
import { Product } from "./Pages/Product/Product";
import { Cms } from "./Pages/CMS/Cms";
import { Pids } from "./Pages/PIDS/Pids";

function App() {

  return (
    <Router >
      <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route exact path="/about"  element={<About/>} />
        <Route exact path="/products"  element={<Product/>} />
        <Route exact path="/productsDetails"  element={<ProductDetails/>} />
        <Route exact path="/cms"  element={<Cms/>} />
        <Route exact path="/pids"  element={<Pids/>} />
        <Route exact path="/adminlogin"  element={<AdminLogin/>} />
        <Route exact path="/admindashboard"  element={<AdminDashboard/>} />
        <Route path="/admindashboard/upload"  element={<Upload/>} />
        <Route path="/admindashboard/update"  element={<Update/>} />
        <Route path="/admindashboard/delete"  element={<Delete/>} />
      </Routes>
    </Router>
  );
}

export default App;
