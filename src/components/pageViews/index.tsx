import { useEffect, useState } from "react";
import ReactLineEChart from "../lineChart";
import { PageViewItem } from "../../utils/types";
import convertDate from "../../utils/date";
import Icons from "../../assets/icons";
import "./index.css";

const pills: { title: string; active: boolean }[] = [
  { title: "1 Day", active: false },
  { title: "3 Days", active: false },
  { title: "7 Days", active: false },
  { title: "30 Days", active: false },
  { title: "All Time", active: true },
  { title: "Custom Date", active: false },
];

const lineOption = {
  title: {
    text: "Stacked Area Chart",
    show: false,
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#FF5403",
      },
    },
  },
  legend: {
    show: false,
    data: ["Email"],
  },
  toolbox: {
    feature: {},
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },

  yAxis: [
    {
      type: "value",
    },
  ],
};

function PageViews({
  data,
  error,
  loading,
}: {
  data: PageViewItem | undefined;
  error: string;
  loading: boolean;
}) {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    if (data) {
      const chartDate = Object.keys(data);
      const chartValue = Object.values(data);

      const convertedDate: string[] = [];
      chartDate.forEach((date) => convertedDate.push(convertDate(date)));

      setChartOptions({
        ...lineOption,
        xAxis: [
          {
            type: "category",
            boundaryGap: true,
            data: ["", ...convertedDate],
            axisTick: {
              length: 0,
              show: false,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "Page Viewa",
            type: "line",
            stack: "Total",
            emphasis: {
              focus: "series",
            },
            symbol: "none",
            lineStyle: {
              color: "#FF5403",
            },
            itemStyle: {
              color: "#FFEEE5",
            },

            data: chartValue,
          },
        ],
      });
    }
  }, [data]);

  return (
    <div className="page_view_wrapper">
      <div className="page_view_filter">
        {pills.map((pill_item) => (
          <div
            key={pill_item.title}
            className={`filter_pills ${pill_item.active && "active"}`}
          >
            {pill_item.title}
          </div>
        ))}
      </div>
      <div className="page_view_container">
        <div className="page_view_topic">
          <div className="">
            <h6>Page Views</h6>
            <p>All time</p>
          </div>
          <img src={Icons.ic_info} alt="" />
        </div>
        <h5>500</h5>
        <div className="line_chart">
          {error ? (
            <p className="error_message">{error}</p>
          ) : (
            <ReactLineEChart loading={loading} option={chartOptions} />
          )}
        </div>
      </div>
    </div>
  );
}
export default PageViews;
