import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPageTitle } from "../../redux/headerSlice";

function ReportList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Danh sách báo cáo" }));
  }, []);

  return <h1>Danh sách báo cáo</h1>;
}

export default ReportList;
