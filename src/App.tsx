import { RouterProvider } from "react-router-dom";
import "./App.css";
import routeList from "./routes/routeList";

function App() {
  return (
   <RouterProvider router={routeList} />
  );
}

export default App;
