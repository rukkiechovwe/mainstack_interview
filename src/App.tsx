import { useEffect, useState } from "react";
import SideNav from "./components/sideNav";
import TopHeader from "./components/topHeader";
import Greeting from "./components/greeting";
import PageViews from "./components/pageViews";
import TopItems from "./components/topItems";
import { GraphData } from "./utils/types";
import "./App.css";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [graphData, setGraphData] = useState<GraphData>();

  const fetchGraphData = async () => {
    setLoading(true);

    try {
      const repsonse = await fetch("https://fe-task-api.mainstack.io/");
      const json = await repsonse.json();
      setGraphData(json);
    } catch (error) {
      setError("Something went wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGraphData();
  }, []);

  return (
    <div className="App">
      <SideNav />
      <div className="main_view">
        <TopHeader />
        <div className="main_app">
          <Greeting />
          <PageViews
            data={graphData?.graph_data?.views}
            loading={loading}
            error={error}
          />
          <div className="top_items">
            <TopItems
              title="Top Locations"
              data={graphData?.top_locations}
              error={error}
              loading={loading}
            />
            <TopItems
              title="Top Referral source"
              data={graphData?.top_sources}
              error={error}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
