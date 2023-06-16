import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function PageContent() {
  const mainContentRef = useRef(null);
  const { pageTitle } = useSelector((state) => state.header);

  // Scroll back to top on new page load
  useEffect(() => {
    mainContentRef.current.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [pageTitle]);

  return (
    <div className="drawer-content flex flex-col ">
      <main
        className="flex-1 overflow-y-auto pt-8 px-6  "
        ref={mainContentRef}
      ></main>
    </div>
  );
}

export default PageContent;
