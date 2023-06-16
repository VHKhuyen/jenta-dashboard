import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPageTitle } from "../../redux/headerSlice";

function Checkouts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Đơn hàng chưa hoàn tất" }));
  }, []);

  return <h1>Đơn hàng chưa hoàn tất</h1>;
}

export default Checkouts;
