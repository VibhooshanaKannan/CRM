// src/app/page.js

import Head from "next/head";
// Correct the import paths based on your project structure
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
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="main-content">
          <Header />

          {/* Stats */}
          <div className="stats-section">
            <Stats />
          </div>

          {/* Pipeline Column */}
          <div className="pipeline-section">
            <PipelineColumn />
          </div>
        </div>
      </div>
    </div>
  );
}
