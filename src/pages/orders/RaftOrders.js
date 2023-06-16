import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPageTitle } from "../../redux/headerSlice";

function RaftOrders() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Đơn hàng nháp" }));
  }, []);

  return <h1>Đơn hàng nháp</h1>;
}

export default RaftOrders;
