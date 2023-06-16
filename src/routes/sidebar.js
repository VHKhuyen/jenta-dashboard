import {
  AiOutlineHome,
  AiOutlineCodeSandbox,
  AiOutlineUser,
  AiOutlineAppstoreAdd,
  AiOutlineSetting,
} from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineDiscount } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";

const iconClasses = `h-6 w-6 inline`;
const routes = [
  {
    path: "/admin/dashboard",
    icon: <AiOutlineHome className={iconClasses} />,
    name: "Tổng quan",
  },
  {
    path: "",
    icon: <GrDocumentText className={`${iconClasses}`} />,
    name: "Đơn hàng",
    submenu: [
      {
        path: "/admin/orders",
        name: "Danh sách đơn hàng",
      },
      {
        path: "/admin/raft_orders",
        name: "Đơn hàng nháp",
      },
      {
        path: "/admin/checkouts",
        name: "Đơn chưa hoàn tất",
      },
    ],
  },
  {
    path: "",
    icon: <AiOutlineCodeSandbox className={`${iconClasses}`} />,
    name: "Sản phẩm",
    submenu: [
      {
        path: "/admin/products",
        name: "Danh sách sản phẩm",
      },
      {
        path: "/admin/categories",
        name: "Danh mục sản phẩm",
      },
      {
        path: "/admin/products/inventory",
        name: "Quản lý kho",
      },
    ],
  },

  {
    path: "/admin/customers",
    icon: <AiOutlineUser className={iconClasses} />,
    name: "Khách hàng",
  },
  {
    path: "/admin/discounts",
    icon: <MdOutlineDiscount className={iconClasses} />,
    name: "Khuyến mãi",
  },
  {
    path: "",
    icon: <HiOutlineDocumentReport className={iconClasses} />,
    name: "Báo cáo",
    submenu: [
      {
        path: "/admin/reports",
        name: "Tổng quan báo cáo",
      },
      {
        path: "/admin/reports/list",
        name: "Danh sách báo cáo",
      },
      {
        path: "/admin/reports/cart",
        name: "Phân tích giỏ hàng",
      },
    ],
  },
  {
    path: "/admin/apps",
    icon: <AiOutlineAppstoreAdd className={iconClasses} />,
    name: "Ứng dụng",
  },

  {
    path: "",
    icon: <AiOutlineSetting className={`${iconClasses}`} />,
    name: "Cấu hình",
    submenu: [
      {
        path: "/admin/settings/store",
        name: "Cấu hình chung",
      },
      {
        path: "/admin/settings/addresses",
        name: "Cấu hình địa chỉ cửa hàng",
      },
      {
        path: "/admin/settings/shipping",
        name: "Kết nối vận chuyển",
      },
    ],
  },
];

export default routes;
