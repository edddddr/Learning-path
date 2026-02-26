import { Link, Outlet } from "react-router"
import "./PosLayout.css"

function ProductLayout(){
    return <>  
    <div className="flex">
        <nav>
            <h1>ProductLayout Page</h1>
            <ul>
                <li>
                    <Link to="/product">Proudct</Link>
                </li>
                <li>
                    <Link to="/order">Order</Link>
                </li>
                <li>
                    <Link to="/sales">Sales</Link>
                </li>
            </ul>
        </nav>
        <main>
        <Outlet/>
        </main>
    </div>
    </>
}


export default ProductLayout