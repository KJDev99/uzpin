"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import GameContent from "./GameContent";

const GameStore = ({ data, gameId }) => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(data[0]?.id ?? "");
  const savedCurrency =
    typeof window !== "undefined"
      ? localStorage.getItem("currency") || "uzs"
      : "uzs";

  return (
    <>
      <div
        className="game_bg"
        style={{
          backgroundImage: `url(${
            data?.cover ||
            "https://api.uzpin.games/media/uploads/31f1076d-d48b-472a-8722-9be49e24bfa4.jpg"
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="grid grid-cols-5 max-w-[1200px] w-full mx-auto">
        <h1 className="col-span-5 text-3xl font-bold my-5 max-sm:hidden">
          {data.name}
        </h1>
        <p className="col-span-3 text-lg text-[#313131] mb-[10px] max-sm:text-sm max-sm:col-span-5">
          {data.note}
        </p>
      </div>

      {gameId === "7d64856a-ae76-4ddc-be75-3a361dcbf9a2" ? (
        <Tabs defaultValue="PH" className="max-w-[1200px] w-full mt-5 mx-auto">
          <TabsList className="w-full bg-transparent justify-start gap-5">
            <TabsTrigger
              value="PH"
              className="w-[25%] max-sm:w-full py-3 text-[18px] border-2 border-[#c0bfbf] data-[state=active]:bg-[#ffba00] text-black data-[state=active]:text-black data-[state=active]:border-none"
            >
              MLBB Uz region
            </TabsTrigger>
            <TabsTrigger
              value="RU"
              className="w-[25%] max-sm:w-full py-3 text-[18px] border-2 border-[#c0bfbf] data-[state=active]:bg-[#ffba00] text-black data-[state=active]:text-black data-[state=active]:border-none"
            >
              MLBB Ru region
            </TabsTrigger>
          </TabsList>

          <TabsContent value="PH">
            <GameContent
              data={data}
              gameId={gameId}
              savedCurrency={savedCurrency}
              t={t}
            />
          </TabsContent>

          <TabsContent value="RU">
            <GameContent
              data={data}
              gameId={gameId}
              savedCurrency={savedCurrency}
              t={t}
            />
          </TabsContent>
        </Tabs>
      ) : gameId === "1" ? (
        <Tabs
          defaultValue={data[0]?.id ?? ""}
          value={activeId}
          onValueChange={setActiveId}
          className="max-w-[1200px] w-full mt-5 mx-auto"
        >
          <TabsList className="w-full h-auto pb-3 bg-transparent justify-start gap-5 overflow-x-auto">
            {data.map((item) => (
              <TabsTrigger
                key={item.id}
                value={item.id}
                className="w-[25%] min-w-fit max-sm:w-full py-3 text-[18px] border-2 border-[#c0bfbf] data-[state=active]:bg-[#ffba00] text-black data-[state=active]:text-black data-[state=active]:border-none"
              >
                {item.name}
              </TabsTrigger>
            ))}
            {/* {data.some(
              (item) => item.id === "7d64856a-ae76-4ddc-be75-3a361dcbf9a2"
            ) && (
              <TabsTrigger
                value="MLBB-RU"
                className="w-[25%] min-w-fit max-sm:w-full py-3 text-[18px] border-2 border-[#c0bfbf] data-[state=active]:bg-[#ffba00] text-black data-[state=active]:text-black data-[state=active]:border-none"
              >
                MLBB RU
              </TabsTrigger>
            )} */}
          </TabsList>

          {data.map((item) => (
            <TabsContent key={item.id} value={item.id}>
              <GameContent
                data={data}
                gameId={item.id}
                server={
                  item.id === "7d64856a-ae76-4ddc-be75-3a361dcbf9a2"
                    ? "ph"
                    : null
                }
                savedCurrency={savedCurrency}
                t={t}
              />
            </TabsContent>
          ))}
          {/* {data.some(
            (item) => item.id === "7d64856a-ae76-4ddc-be75-3a361dcbf9a2"
          ) && (
            <TabsContent value="MLBB-RU">
              <GameContent
                data={data}
                server="ru"
                gameId="7d64856a-ae76-4ddc-be75-3a361dcbf9a2"
                savedCurrency={savedCurrency}
                t={t}
              />
            </TabsContent>
          )} */}
        </Tabs>
      ) : (
        <div className="max-w-[1200px] w-full mt-5 mx-auto">
          <GameContent
            data={data}
            gameId={gameId}
            savedCurrency={savedCurrency}
            t={t}
          />
        </div>
      )}
    </>
  );
};

export default GameStore;
