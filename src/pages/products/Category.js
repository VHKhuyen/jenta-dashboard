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
        Thêm danh mục
      </button>
    </div>
  );
};

function Category() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await request.get("/categories");
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(setPageTitle({ title: "Danh mục" }));
    fetchProducts();
  }, []);

  return (
    <>
      <TitleCard
        title="Tất cả danh mục"
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
                <th>Danh mục</th>
                <th>Miêu tả</th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((l, k) => {
                return (
                  <tr key={k}>
                    <td>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </td>
                    <td>{l.name}</td>
                    <td>{l.description || "..."}</td>
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

export default Category;
