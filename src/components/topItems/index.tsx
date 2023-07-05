import { useEffect, useState } from "react";
import ReactDoughnutECharts from "../doughnutChart";
import { TopItemsData } from "../../utils/types";
import Icons from "../../assets/icons";
import "./index.css";

const doughnutOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    show: false,
  },
};

const colors: string[] = [
  "#599EEA",
  "#844FF6",
  "#0FB77A",
  "#FAB70A",
  "#F09468",
];
const locationIcons: string[] = [
  Icons.ic_nigeria,
  Icons.ic_usa,
  Icons.ic_netherlands,
  Icons.ic_andorra,
  Icons.ic_usa,
];
const referralIcons: string[] = [
  Icons.ic_twitter,
  Icons.ic_instagram,
  Icons.ic_facebook,
  Icons.ic_linkedin,
];

function TopItems({
  title,
  data,
  error,
  loading,
}: {
  title: string;
  data: TopItemsData[] | undefined;
  error: string;
  loading: boolean;
}) {
  const [chartOptions, setChartOptions] = useState({});
  const [topItems, setTopItems] = useState<TopItemsData[]>([]);

  useEffect(() => {
    if (data) {
      const chartData: { value: string; name: string | undefined }[] = [];
      data?.forEach((item) =>
        chartData.push({
          value: item.percent,
          name: item.country ?? item.source,
        })
      );
      setTopItems(data ?? []);
      setChartOptions({
        ...doughnutOption,
        series: [
          {
            name: title,
            type: "pie",
            radius: ["40%", "80%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: false,
                fontSize: 16,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            color: colors,
            data: chartData,
          },
        ],
      });
    }
  }, [data]);

  return (
    <div className="top_items_wrapper">
      <div className="top_items_topic">
        <h6>{title}</h6>
        <p>View full reports</p>
      </div>
      {error ? (
        <p className="error_message">{error}</p>
      ) : (
        <div className="top_items_container">
          <div className="labels">
            {topItems.map((items, index) => (
              <div className="label" key={items.country ?? items.source}>
                <img
                  src={
                    items.country !== undefined
                      ? locationIcons[index]
                      : referralIcons[index]
                  }
                  alt=""
                  width={24}
                  height={24}
                />
                <p className="label_country">{items.country ?? items.source}</p>
                <span className="lable_percentage">{items.percent}%</span>
                <span
                  className="label_color"
                  style={{ background: colors[index] }}
                />
              </div>
            ))}
          </div>
          <div className="doughnut_chart">
            <ReactDoughnutECharts loading={loading} option={chartOptions} />
          </div>
        </div>
      )}
    </div>
  );
}
export default TopItems;
