import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineDollar } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiStore, BiMoney } from "react-icons/bi";

import DashboardStats from "./components/DashboardStats";
import AmountStats from "./components/AmountStats";
import UserChannels from "./components/UserChannels";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DashboardTopBar from "./components/DashboardTopBar";
import DoughnutChart from "./components/DoughnutChart";

import { setPageTitle, showNotification } from "../../redux/headerSlice";

const statsData = [
  {
    title: "Doanh thu",
    value: "500.000đ",
    icon: <AiOutlineDollar className="w-8 h-8" />,
    description: "Hôm nay",
  },
  {
    title: "Đơn hàng",
    value: "180",
    icon: <BiStore className="w-8 h-8" />,
    description: "↗︎ 45 (25%)",
  },
  {
    title: "Khách hàng",
    value: "100",
    icon: <HiOutlineUserGroup className="w-8 h-8" />,
  },
  {
    title: "Chuyển đổi",
    value: "60%",
    icon: <BiMoney className="w-8 h-8" />,
    description: "↙ 300 (18%)",
  },
  {
    title: "Tỉ lệ bỏ trang",
    value: "20%",
    description: "↙ 300 (18%)",
  },
];

function Dashboard() {
  const dispatch = useDispatch();

  const updateDashboardPeriod = (newRange) => {
    dispatch(
      showNotification({ message: `Period updated to ${newRange}`, status: 1 })
    );
  };

  useEffect(() => {
    dispatch(setPageTitle({ title: "Tổng quan" }));
  }, []);

  return (
    <>
      {/** ---------------------- Select Period Content ------------------------- */}
      <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} />

      {/** ---------------------- Different stats content 1 ------------------------- */}
      <div className="grid lg:grid-cols-4 mt-8 md:grid-cols-2 grid-cols-1 gap-6">
        {statsData.map((d, k) => {
          return <DashboardStats key={k} {...d} />;
        })}
      </div>

      {/** ---------------------- Different charts ------------------------- */}
      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <BarChart />
        <LineChart />
      </div>

      {/** ---------------------- Different stats content 2 ------------------------- */}
      <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
        <AmountStats />
        <DashboardStats {...statsData[4]} />
      </div>

      {/** ---------------------- User source channels table  ------------------------- */}

      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <UserChannels />
        <DoughnutChart />
      </div>
    </>
  );
}

export default Dashboard;
