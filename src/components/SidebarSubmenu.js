import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
function SidebarSubmenu({ submenu, name, icon }) {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (
      submenu.filter((m) => {
        return m.path === location.pathname;
      })[0]
    )
      setIsExpanded(true);
  }, []);

  return (
    <>
      <li>
        <div
          className="w-full justify-between"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex gap-4">
            {icon} {name}
          </div>
          {/** Route header */}
          <BsChevronDown
            className={
              "w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all" +
              (isExpanded ? "rotate-180" : "")
            }
          />
        </div>
      </li>
      {/** Submenu list */}
      <div className={` w-full ` + (isExpanded ? "" : "hidden")}>
        <ul className="menu menu-compact flex flex-col p-0 px-4">
          {submenu.map((m, index) => {
            return (
              <li key={index}>
                <Link
                  to={m.path}
                  className={`flex gap-4 ${
                    location.pathname == m.path ? "bg-primary text-white" : ""
                  }`}
                >
                  {m.icon} {m.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default SidebarSubmenu;
