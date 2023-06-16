import moment from "moment";
import { useState, useEffect } from "react";
import { TitleCard } from "../../components";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../redux/headerSlice";

const orderss = [
  {
    invoiceNo: "#4567",
    amount: "23,989",
    description: "Product usages",
    status: "Pending",
    generatedOn: moment(new Date())
      .add(-30 * 1, "days")
      .format("DD MMM YYYY"),
    paidOn: "Pending",
  },

  {
    invoiceNo: "#4523",
    amount: "34,989",
    description: "Product usages",
    status: "Pending",
    generatedOn: moment(new Date())
      .add(-30 * 2, "days")
      .format("DD MMM YYYY"),
    paidOn: "Pending",
  },

  {
    invoiceNo: "#4453",
    amount: "39,989",
    description: "Product usages",
    status: "Unpaid",
    generatedOn: moment(new Date())
      .add(-30 * 3, "days")
      .format("DD MMM YYYY"),
    paidOn: moment(new Date())
      .add(-24 * 2, "days")
      .format("DD MMM YYYY"),
  },

  {
    invoiceNo: "#4359",
    amount: "28,927",
    description: "Product usages",
    status: "Unpaid",
    generatedOn: moment(new Date())
      .add(-30 * 4, "days")
      .format("DD MMM YYYY"),
    paidOn: "Not shipped",
  },

  {
    invoiceNo: "#3359",
    amount: "28,927",
    description: "Product usages",
    status: moment(new Date())
      .add(-30 * 1, "days")
      .format("DD MMM YYYY"),
    generatedOn: moment(new Date())
      .add(-30 * 5, "days")
      .format("DD MMM YYYY"),
    paidOn: moment(new Date())
      .add(-24 * 4, "days")
      .format("DD MMM YYYY"),
  },

  {
    invoiceNo: "#3367",
    amount: "28,927",
    description: "Product usages",
    status: "Unpaid",
    generatedOn: moment(new Date())
      .add(-30 * 6, "days")
      .format("DD MMM YYYY"),
    paidOn: "Pending",
  },

  {
    invoiceNo: "#3359",
    amount: "28,927",
    description: "Product usages",
    status: "Unpaid",
    generatedOn: moment(new Date())
      .add(-30 * 7, "days")
      .format("DD MMM YYYY"),
    paidOn: moment(new Date())
      .add(-24 * 6, "days")
      .format("DD MMM YYYY"),
  },

  {
    invoiceNo: "#2359",
    amount: "28,927",
    description: "Product usages",
    status: "Unpaid",
    generatedOn: moment(new Date())
      .add(-30 * 8, "days")
      .format("DD MMM YYYY"),
    paidOn: moment(new Date())
      .add(-24 * 7, "days")
      .format("DD MMM YYYY"),
  },
];

const Orders = () => {
  const [orders, setOrders] = useState(orderss);

  const getPaymentStatus = (status) => {
    if (status === "Unpaid" || status === "Not shipped")
      return <div className="badge badge-ghost">{status}</div>;
    if (status === "Pending")
      return <div className="badge badge-primary">{status}</div>;
    else return <div className="badge badge-success">{status}</div>;
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Đơn hàng" }));
  }, []);
  return (
    <TitleCard title="Tất cả đơn hàng" topMargin="mt-2">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Đơn hàng</th>
              <th>Ngày đặt</th>
              <th>Khách hàng</th>
              <th>Thanh toán</th>
              <th>Giao hàng</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((l, k) => {
              return (
                <tr key={k}>
                  <td>{l.invoiceNo}</td>
                  <td>{l.generatedOn}</td>
                  <td>{l.description}</td>
                  <td>{getPaymentStatus(l.status)}</td>
                  <td>{getPaymentStatus(l.paidOn)}</td>
                  <td>${l.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </TitleCard>
  );
};

export default Orders;
