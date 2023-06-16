import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPageTitle } from "../../redux/headerSlice";

import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import PieChart from "./components/PieChart";
import ScatterChart from "./components/ScatterChart";
import StackBarChart from "./components/StackBarChart";
function Reports() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Báo cáo" }));
  }, []);

  return (
    <>
      {/** ---------------------- Different Reports ------------------------- */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <StackBarChart />
        <BarChart />
      </div>

      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <DoughnutChart />
        <PieChart />
      </div>

      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <ScatterChart />
        <LineChart />
      </div>
    </>
  );
}

export default Reports;
