import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TitleCard } from "../../components";
import { setPageTitle } from "../../redux/headerSlice";

function Discounts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Khuyến mãi" }));
  }, []);

  return (
    <>
      <TitleCard
        title="Mã khuyến mãi"
        topMargin="mt-2"
        TopSideButtons={
          <div className="inline-block float-right">
            <Link
              to={"/admin/products"}
              className="btn px-6 btn-sm normal-case btn-primary"
            >
              Tạo khuyến mãi
            </Link>
          </div>
        }
      ></TitleCard>
    </>
  );
}

export default Discounts;
