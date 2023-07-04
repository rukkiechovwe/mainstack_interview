import { useRef, useEffect } from "react";
import { init, getInstanceByDom } from "echarts";
import type { EChartsOption, ECharts } from "echarts";

interface ReactEChartsProps {
  option: EChartsOption;
  loading?: boolean;
}


function ReactDoughnutECharts({
  option,

  loading,
}: ReactEChartsProps): JSX.Element {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      chart = init(chartRef.current, "light");
    }

    function resizeChart() {
      chart?.resize();
    }
    window.addEventListener("resize", resizeChart);

    return () => {
      chart?.dispose();
      window.removeEventListener("resize", resizeChart);
    };
  }, []);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart?.setOption(option);
    }
  }, [option]);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      loading === true ? chart?.showLoading() : chart?.hideLoading();
    }
  }, [loading]);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
}
export default ReactDoughnutECharts;
