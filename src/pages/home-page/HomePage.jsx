import { games } from "../../../server/db.json";
import { GameItem } from "../../components/game-item";
import "./home-page.css";

export const HomePage = () => {
  return (
    <>
      <div className="home-page">
        {games.map((game) => (
          <GameItem games={game} key={game.id} />
        ))}
      </div>
    </>
  );
};
