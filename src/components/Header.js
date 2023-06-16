import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { RIGHT_DRAWER_TYPES } from "../utils/globalConstantUtil";
import { avatar } from "../assets/images";
import { headerSelector } from "../redux/selector";
import { openRightDrawer } from "../redux/rightDrawerSlice";

function Header() {
  const dispatch = useDispatch();
  const { noOfNotifications, pageTitle } = useSelector(headerSelector);
  const openNotification = () => {
    dispatch(
      openRightDrawer({
        header: "Notifications",
        bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION,
      })
    );
  };
  const handleToggle = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };
  function logoutUser() {
    handleToggle();
    localStorage.clear();
  }

  return (
    <div className="navbar flex justify-between bg-base-100 z-10 border-b-[1px] border-[#dddee0]">
      <div>
        <label
          htmlFor="left-sidebar-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <AiOutlineMenu className="h-5 inline-block w-5" />
        </label>
        <h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
      </div>

      <div className="order-last">
        <button
          className="btn btn-ghost ml-4 btn-circle"
          onClick={() => openNotification()}
        >
          <div className="indicator">
            <IoMdNotificationsOutline className="h-6 w-6" />
            {noOfNotifications > 0 ? (
              <span className="indicator-item badge badge-primary badge-sm">
                {noOfNotifications}
              </span>
            ) : null}
          </div>
        </button>

        {/* Profile icon, opening menu on click */}
        <div className="dropdown dropdown-end ml-4">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={avatar} alt="profile" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/admin/settings/accounts"} onClick={handleToggle}>
                Tài khoản của bạn
              </Link>
            </li>
            <div className="divider mt-0 mb-0"></div>
            <li>
              <Link to={"/admin/login"} onClick={logoutUser}>
                Đăng xuất
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
