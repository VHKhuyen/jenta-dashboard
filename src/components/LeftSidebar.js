import routes from "../routes/sidebar";
import { NavLink, Link } from "react-router-dom";
import SidebarSubmenu from "./SidebarSubmenu";
import { logo } from "../assets/images";
function LeftSidebar() {
  return (
    <div className="drawer-side">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <aside className="bg-base-200 w-72">
        <div className="sticky top-0 z-20 bg-base-200 lg:shadow-sm backdrop-blur bg-opacity-90 items-center transition duration-300 h-16 px-4 py-2 hidden lg:flex shadow-sm">
          <Link
            to={"/admin/dashboard"}
            className="px-2 btn btn-ghost gap-2 text-primary font-bold lg:text-[24px] text-[20px]"
          >
            <img
              src={logo}
              alt="Jenta dashboard"
              className="lg:h-10 md:h-9 h-8"
            />
            Jenta
          </Link>
        </div>
        <div className="h-4"></div>
        <ul className="menu menu-compact flex flex-col p-0 px-4">
          {routes.map((route, index) => {
            return route.submenu ? (
              <SidebarSubmenu {...route} key={index} />
            ) : (
              <li key={index}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    `flex gap-4 ${isActive ? "bg-primary text-white" : ""}`
                  }
                >
                  {route.icon} {route.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}

export default LeftSidebar;
