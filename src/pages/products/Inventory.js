import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TitleCard } from "../../components";
import VariantQuantity from "./components/VariantQuantity";
import { setPageTitle } from "../../redux/headerSlice";
import { request } from "../../utils/httpRequest";
import { formattedUnitPrice } from "../../utils/formatter";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    try {
      const response = await request.get("/inventory");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(setPageTitle({ title: "Quản lí kho" }));
    fetchProducts();
  }, []);

  return (
    <>
      <TitleCard
        title="Tất cả sản phẩm"
        topMargin="mt-2"
        TopSideButtons={
          <div className="inline-block float-right">
            <Link
              to={"/admin/products"}
              className="btn px-6 btn-sm normal-case btn-primary"
            >
              Xem sản phẩm
            </Link>
          </div>
        }
      >
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Cập nhật số lượng</th>
              </tr>
            </thead>
            <tbody>
              {products.map((l, k) => {
                return (
                  <tr key={k}>
                    <td>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={l.imgUrl}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{l.name}</div>
                          <div className="text-sm opacity-50">
                            <span>{l.size}</span>/<span>{l.color}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{formattedUnitPrice(l.unit_price)}</td>
                    <td>{l.quantity}</td>
                    <td>
                      <VariantQuantity
                        setProducts={setProducts}
                        variant_id={l.product_variants_id}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
}

export default Products;
