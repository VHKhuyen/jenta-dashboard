import SelectBox from "../../../components/Input/SelectBox";

const periodOptions = [
  { name: "Hôm nay", value: "TODAY" },
  { name: "Hôm qua", value: "YESTERDAY" },
  { name: "Tuần này", value: "THIS_WEEK" },
  { name: "Tuần trước", value: "LAST_WEEK" },
  { name: "Tháng này", value: "THIS_MONTH" },
  { name: "Tháng trước", value: "LAST_MONTH" },
];

const DashboardTopBar = ({ updateDashboardPeriod }) => {
  const updateSelectBoxValue = ({ value }) => {
    updateDashboardPeriod(value);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="">
        <SelectBox
          options={periodOptions}
          labelTitle="Period"
          placeholder="Chọn thời gian"
          containerStyle="w-52"
          labelStyle="hidden"
          defaultValue="TODAY"
          updateFormValue={updateSelectBoxValue}
        />
      </div>
    </div>
  );
};

export default DashboardTopBar;
