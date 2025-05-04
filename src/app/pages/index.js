import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Stats from "../components/Stats";
import PipelineColumn from "../components/CRMPipelineBoard"; // If this component is intended to be used
import "../styles/global.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>BizLink Dashboard</title>
      </Head>
      <div className="dashboard-container">
        {" "}
        {/* Added a wrapper for better structure */}
        <Sidebar />
        <main className="main-content">
          <Header />
          <Stats />
          {/* Add more components or layout here */}
        </main>
      </div>
    </>
  );
}
