import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TitleCard } from "../../components";
import { MODAL_BODY_TYPES } from "../../utils/globalConstantUtil";
import { setPageTitle, showNotification } from "../../redux/headerSlice";
import { openModal } from "../../redux/modalSlice";
import { deleteLead, getAllLeads } from "../../redux/leadSlice";

const TopSideButtons = () => {
  const dispatch = useDispatch();
  const openAddNewLeadModal = () => {
    dispatch(
      openModal({
        title: "Add New Lead",
        bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW,
      })
    );
  };

  return (
    <div className="inline-block float-right">
      <button
        className="btn px-6 btn-sm normal-case btn-primary"
        onClick={() => openAddNewLeadModal()}
      >
        Thêm khách hàng
      </button>
    </div>
  );
};

function Leads() {
  const { leads } = useSelector((state) => state.lead);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLeads());
  }, []);

  useEffect(() => {
    dispatch(setPageTitle({ title: "Khách hàng" }));
  }, []);

  const deleteCurrentLead = (index) => {
    dispatch(deleteLead({ index }));
    dispatch(showNotification({ message: "Lead Deleted!", status: 1 }));
  };

  return (
    <>
      <TitleCard
        title="Tất cả khách hàng"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons />}
      >
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Tên</th>
                <th>Email</th>
                <th>Điện thoại</th>
                <th>Đơn hàng</th>
                <th>Điểm</th>
                <th>Tổng chi tiêu</th>
                <th>Ngày tạo</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l, k) => {
                return (
                  <tr key={k}>
                    <td>{l.name}</td>
                    <td>{l.email}</td>
                    <td>{l.phone || "..."}</td>
                    <td>{l.order || 0}</td>
                    <td>{l.points}</td>
                    <td>{l.total || "0đ"}</td>
                    <td>{moment(l.createdAt).format("DD MMM YY")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
}

export default Leads;
