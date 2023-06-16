import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { TitleCard } from "../../components";
import { MODAL_BODY_TYPES } from "../../utils/globalConstantUtil";
import { setPageTitle } from "../../redux/headerSlice";
import { openModal } from "../../redux/modalSlice";
import { request } from "../../utils/httpRequest";

const TopSideButtons = () => {
  const dispatch = useDispatch();
  const openAddNewLeadModal = () => {
    dispatch(
      openModal({
        title: "Add New Product",
        bodyType: MODAL_BODY_TYPES.PRODUCTS_ADD_NEW,
      })
    );
  };
  return (
    <div className="inline-block float-right">
      <button
        className="btn px-6 btn-sm normal-case btn-primary"
        onClick={() => openAddNewLeadModal()}
      >
        Thêm sản phẩm
      </button>
    </div>
  );
};

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await request.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(setPageTitle({ title: "Sản phẩm" }));
    fetchProducts();
  }, []);

  return (
    <>
      <TitleCard
        title="Tất cả sản phẩm"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons />}
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
                <th>Loại</th>
                <th>Giá</th>
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
                            <img src={l.images[0].imgUrl} alt="Product" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{l.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{l.category?.name}</td>
                    <td>{l.unit_price}</td>
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
