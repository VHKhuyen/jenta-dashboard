import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import {
  Dashboard,
  ErrorPage,
  Orders,
  Checkouts,
  RaftOrders,
  Reports,
  ReportList,
  ReportCart,
  ForgotPassword,
  Integration,
  Leads,
  Login,
  ProfileSettings,
  Register,
  Products,
  Category,
  Inventory,
  Discounts,
} from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" replace />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/orders",
        element: <Orders />,
      },
      {
        path: "/admin/raft_orders",
        element: <RaftOrders />,
      },
      {
        path: "/admin/checkouts",
        element: <Checkouts />,
      },
      {
        path: "/admin/products",
        element: <Products />,
      },
      {
        path: "/admin/categories",
        element: <Category />,
      },
      {
        path: "/admin/products/inventory",
        element: <Inventory />,
      },
      {
        path: "/admin/customers",
        element: <Leads />,
      },
      {
        path: "/admin/discounts",
        element: <Discounts />,
      },
      {
        path: "/admin/reports",
        element: <Reports />,
      },
      {
        path: "/admin/reports/list",
        element: <ReportList />,
      },
      {
        path: "/admin/reports/cart",
        element: <ReportCart />,
      },
      {
        path: "/admin/login",
        element: <Login />,
      },
      {
        path: "/admin/register",
        element: <Register />,
      },
      {
        path: "/admin/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/admin/settings/accounts",
        element: <ProfileSettings />,
      },
      {
        path: "/admin/apps",
        element: <Integration />,
      },
    ],
  },
]);
