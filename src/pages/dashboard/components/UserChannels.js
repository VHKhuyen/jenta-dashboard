import { TitleCard } from "../../../components";

const userSourceData = [
  { source: "Facebook Ads", count: "2,345", conversionPercent: 10.2 },
  { source: "Google Ads", count: "1,341", conversionPercent: 11.7 },
  { source: "Instagram Ads", count: "3,379", conversionPercent: 12.4 },
  { source: "Tiktok Ads", count: "3,379", conversionPercent: 12.4 },
];

function UserChannels() {
  return (
    <TitleCard title={"Nguồn người dùng đăng ký "}>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="normal-case">Nguồn</th>
              <th className="normal-case">Số người dùng</th>
              <th className="normal-case">Chuyển đổi</th>
            </tr>
          </thead>
          <tbody>
            {userSourceData.map((u, k) => {
              return (
                <tr key={k}>
                  <th>{k + 1}</th>
                  <td>{u.source}</td>
                  <td>{u.count}</td>
                  <td>{`${u.conversionPercent}%`}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </TitleCard>
  );
}

export default UserChannels;
