import React from "react";
import { ThemeProvider } from "./context/ThemeContext";

// Core layout (includes Navbar + Footer)
import Layout from "./components/Layout";

// Feature components
import TaskManager from "./components/TaskManager";
import ApiDataFetcher from "./components/ApiDataFetcher";

// Optional reusable UI example
import DemoCard from "./components/DemoCard";

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TaskManager />
          <ApiDataFetcher />
          <DemoCard />
        </div>
      </Layout>
    </ThemeProvider>
  );
}
