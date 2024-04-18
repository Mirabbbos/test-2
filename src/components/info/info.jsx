import clsx from "clsx";
import React, { useState } from "react";
import Deskription from "./description";

export default function Info() {
  let buttons = ["Tavsif", "Aktyorlar va ijodkorlar", "Sharhlar"];
  const [active, setActive] = useState(buttons[0]);

  return (
    <section className="py-10 my-5">
      <div className="container">
        {buttons.map((item) => (
          <button
            onClick={() => setActive(item)}
            className={clsx("btn rounded-md m-1", {
              "btn-primary": item === active,
              "btn-ghost": item !== active,
            })}
            key={item}
          >
            {item}
          </button>
        ))}

        {active === "Tavsif" && <Deskription />}
        {active === "Sharhlar" && (
          <>
            <h1>Sharhlar</h1>
          </>
        )}
        {active === "Aktyorlar va ijodkorlar" && (
          <>
            <h1>Aktyorlar va ijodkorlar</h1>
          </>
        )}
      </div>
    </section>
  );
}
