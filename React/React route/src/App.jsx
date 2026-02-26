import {Link, Route, Routes} from 'react-router-dom'
import Profile from "./pages/Profile"
import Product from "./pages/Product"
import Sales from "./pages/Sales"
import Order from "./pages/Orders"
import PosLayout from "./pages/PosLayout"
// import Usereducer_hook from "./pages/Usereducer_hook"
import UseMemo_hook from "./pages/UseMemo_hook"
import UseRef_hook from "./pages/UseRef_hook"
import './pos.css'
function App() {
  return <>
          <h1 className="hero">POS DASHBOARD</h1>         
  <Routes>
      {/* <Route path="/" element={<PosLayout/>}>
        <Route path=":profile" element={<Profile/>} />
        <Route path="product" element={<Product/>} />
        <Route path="order" element={<Order/>} />
        <Route path="sales" element={<Sales/>} />
        <Route path="usereducer_hook" element={<Usereducer_hook/>} />
      </Route> */}
      {/* <Route paht="/usereducer" element={<Usereducer_hook/>}/> */}
      <Route path="/usememo" element={<UseMemo_hook/>}/>
      <Route path="/useref" element={<UseRef_hook/>}/>

  </Routes>
  </> 
}

export default App
