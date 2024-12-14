import GameInfo from "@/components/gameStoreBox/GameInfo";
import GameStore from "@/components/gameStoreBox/GameStore";
import React from "react";

export default function GameDetails() {
  return (
    <div>
      <div className="game_bg"></div>
      <div className="game__content_bg">
        <GameStore />
        <GameInfo />
      </div>
    </div>
  );
}
