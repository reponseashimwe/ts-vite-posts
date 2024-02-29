import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Posts from "./Posts.tsx";
import "./index.css";

// Initialze the client
const queryClient = new QueryClient();

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Posts /> },
    // { path: "component2", element: <Component2 /> },
    // ...
  ]);
  return routes;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
