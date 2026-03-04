import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routes/Routes";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 5000,
          style: {
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            color: "#1e293b",
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            borderRadius: "16px",
            border: "1px solid rgba(226, 232, 240, 0.8)",
            padding: "12px 20px",
            fontSize: "14px",
            fontWeight: "600",
            maxWidth: "400px",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
            style: {
              borderLeft: "4px solid #10b981",
            },
          },
          error: {
            duration: 6000,
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
            style: {
              borderLeft: "4px solid #ef4444",
            },
          },
          loading: {
            style: {
              borderLeft: "4px solid #2563eb",
              background: "rgba(255, 255, 255, 0.95)",
            },
          },
        }}
      />
      <main>
        <MyRoutes />
      </main>
    </BrowserRouter>
  );
};
