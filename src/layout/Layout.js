import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import ModalLayout from "../components/ModalLayout";
import "react-notifications/lib/notifications.css";
import { Outlet } from "react-router-dom";
import { Header } from "../components";
function Layout() {
  return (
    <section>
      <div className="drawer drawer-mobile">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col mb-4">
          <Header />
          <main className="flex-1 overflow-y-auto p-6">
            <div className="h-16">
              <Outlet />
            </div>
          </main>
        </div>
        <LeftSidebar />
      </div>
      <RightSidebar />
      <ModalLayout />
    </section>
  );
}

export default Layout;
