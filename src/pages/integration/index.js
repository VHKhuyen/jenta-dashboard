import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { TitleCard } from "../../components";
import { setPageTitle, showNotification } from "../../redux/headerSlice";

const INITIAL_INTEGRATION_LIST = [
  {
    name: "Facebook",
    icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
    isActive: false,
    description:
      "Meta Platforms, Inc., kinh doanh dưới tên Meta và trước đây là Facebook, Inc. và TheFacebook.",
  },
  {
    name: "Linkedin",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    isActive: true,
    description:
      "LinkedIn là một nền tảng truyền thông xã hội tập trung vào kinh doanh và việc làm hoạt động qua các trang web và ứng dụng di động.",
  },
  {
    name: "Google Ads",
    icon: "https://cdn-icons-png.flaticon.com/512/2301/2301145.png",
    isActive: false,
    description:
      "Google Ads là một nền tảng quảng cáo trực tuyến được phát triển bởi Google, nơi các nhà quảng cáo đấu giá để hiển thị các quảng cáo ngắn gọn, các dịch vụ cung cấp",
  },
  {
    name: "Gmail",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png",
    isActive: false,
    description:
      "Gmail là một dịch vụ email miễn phí được cung cấp bởi Google. Đến năm 2019, nó có 1,5 tỷ người dùng hoạt động trên toàn cầu.",
  },
  {
    name: "Salesforce",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968880.png",
    isActive: false,
    description:
      "Nó cung cấp phần mềm quản lý mối quan hệ khách hàng và các ứng dụng tập trung vào bán hàng, dịch vụ khách hàng, tự động hóa tiếp thị.",
  },
];
function Integration() {
  const dispatch = useDispatch();

  const [integrationList, setIntegrationList] = useState(
    INITIAL_INTEGRATION_LIST
  );
  useEffect(() => {
    dispatch(setPageTitle({ title: "Ứng dụng" }));
  }, []);
  const updateIntegrationStatus = (index) => {
    let integration = integrationList[index];
    setIntegrationList(
      integrationList.map((i, k) => {
        if (k === index) return { ...i, isActive: !i.isActive };
        return i;
      })
    );
    dispatch(
      showNotification({
        message: `${integration.name} ${
          integration.isActive ? "disabled" : "enabled"
        }`,
        status: 1,
      })
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {integrationList.map((i, k) => {
          return (
            <TitleCard key={k} title={i.name} topMargin={"mt-2"}>
              <p className="flex">
                <img
                  alt="icon"
                  src={i.icon}
                  className="w-12 h-12 inline-block mr-4"
                />
                {i.description}
              </p>
              <div className="mt-6 text-right">
                <input
                  type="checkbox"
                  className="toggle toggle-success toggle-lg"
                  checked={i.isActive}
                  onChange={() => updateIntegrationStatus(k)}
                />
              </div>
            </TitleCard>
          );
        })}
      </div>
    </>
  );
}

export default Integration;
