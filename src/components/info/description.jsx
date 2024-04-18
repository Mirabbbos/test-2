import React from "react";

import card from "../../assets/card.svg";

export default function Deskription() {
  return (
    <div className="grid grid-cols-12 grid-rows-1 gap-4 mt-8">
      <div className="col-span-full min-[650px]:col-span-3">
        <img
          className="rounded-lg w-auto min-[650px]:w-full h-auto"
          src={card}
          alt="vdsfv"
        />
      </div>
      <div className="col-span-full min-[650px]:col-span-9 min-[650px]:col-start-4">
        <b className="text-sm text-primary">
          52 min 18+ 2022 Jangari Fantastika AQSh
        </b>
        <p className="mt-3">
          XXVI век. Человечество в лице Космического командования объединенных
          наций вынуждено сражаться с военно-религиозным союзом под названием
          Ковенант. К сожалению, земляне проигрывают инопланетянам по всем
          фронтам, но надежда появляется после того, как в дело вступает
          генетически усовершенствованный солдат Мастер Чиф. Он отправляется на
          странную искусственно созданную планету в виде кольца, чтобы разгадать
          ее предназначение
        </p>
        <br />
        <div>
          <span className="w-[50px] inline-block">Til:</span>
          <span>UZ</span>
        </div>
        <div>
          <span className="w-[50px] inline-block">Sifati:</span>
          <span>HD</span>
        </div>
      </div>
    </div>
  );
}
