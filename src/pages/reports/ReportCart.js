import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPageTitle } from "../../redux/headerSlice";

function ReportList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Báo cáo phân tích giỏ hàng" }));
  }, []);

  return <h1>Báo cáo phân tích giỏ hàng</h1>;
}

export default ReportList;
