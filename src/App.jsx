import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page/HomePage";
import { GamePage } from "./pages/game-page/GamePage";
import { OrderPage } from "./pages/order-page/OrderPage";
import { SearchPage } from "./pages/search-page/SearchPage";
import { Layout } from "./components/layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/game/:title" element={<GamePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
};
