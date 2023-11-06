import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page/HomePage";
import { Layout } from "./components/layout/layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
