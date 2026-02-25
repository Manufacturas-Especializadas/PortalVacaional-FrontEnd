import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routes/Routes";

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <MyRoutes />
      </main>
    </BrowserRouter>
  );
};
