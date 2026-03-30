import "./assets/style.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  // 3. 應用程式入口，通常只會設定一次不太會記得
  return <RouterProvider router={router} />;
}
export default App;
