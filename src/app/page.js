
import Head from "next/head";

import Sidebar from "../app/components/Sidebar";
import Header from "../app/components/Header";
import Stats from "../app/components/Stats";
import PipelineColumn from "./components/CRMPipelineBoard";

export default function Home() {
  return (
    <div className="dashboard-container">
      <Head>
        <title>BizLink Dashboard</title>
        <meta name="description" content="BizLink Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="dashboard-content">
        <Sidebar />

        <div className="main-content">
          <Header />

          <div className="stats-section">
            <Stats />
          </div>

          <div className="pipeline-section">
            <PipelineColumn />
          </div>
        </div>
      </div>
    </div>
  );
}
