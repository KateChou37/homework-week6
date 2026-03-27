// 修正點：必須同時匯入 Link 和 Outlet
import { Link, Outlet } from "react-router-dom";

function FrontendLayout () {
    return(
        <>
        <header>
            <ul className="nav">
                <li className="nav-item">
                    {/* 大小寫要注意 */}
                    <Link className="nav-link active"  to="/">首頁</Link>
                </li>
                <li className="nav-item">
                    {/* 大小寫要注意 */}
                    <Link className="nav-link active"  to="/products">產品列表</Link>
                </li>
                <li className="nav-item">
                    {/* 大小寫要注意 */}
                    <Link className="nav-link active"  to="/Cart">購物車</Link>
                </li>
            </ul>
        </header>

        <main>
            <Outlet />
        </main>
        <footer></footer>
        </>
    
)

    
}
export default FrontendLayout