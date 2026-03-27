import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

//API設定
const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;

function Products() {
  // 打API，一進到畫面就會
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/${API_PATH}/products`);
        console.log(res.data.products);
        setProducts(res.data.products);
      } catch (error) {
        console.error("取得產品失敗".error);
      }
    };
    getProducts();
  }, []);

  const handleView = async (id) => {
    navigate(`/product/${id}`); //只做切頁面
    // try {
    //   const res = await axios.get(` ${API_BASE}/api/${API_PATH}/product/${id}`);
    //   console.log(res.data.product);
    //   navigate(`/product/${id}`, {
    //     state: {
    //       productData: res.data.product,
    //     },
    //   });
    // } catch (error) {
    //   console.error("取得產品失敗".error);
    // }
  };

  return (
    <div className="container">
      <div className="row">
        {
          //   要把多筆資料渲染在畫面上
          products.map((product) => (
            <div className="col-md-4 mb-3" key={product.id}>
              <div className="card ">
                <img
                  src={product.imageUrl}
                  className="card-img-top "
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">價格:{product.price}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {product.unit}
                    </small>
                  </p>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => handleView(product.id)}
                  >
                    查看更多
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
export default Products;
