import "./App.css";
import { indexRoutes } from "./routes/indexRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {indexRoutes.map(({ component: Component, ...item }) => {
            return (
              <Route path={item.path} element={<Component />} key={item.name} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
