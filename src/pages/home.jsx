// *** Icons ***

import { useEffect, useState } from "react";
import BannerSlider from "../components/banner-slider/banner-slider";
import CardSlider from "../components/card-slider/card-slider";
import { getModuls } from "../services/service";

export default function Home() {
  let card_item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [movieSections, setMovieSections] = useState([]);
  useEffect(() => {
    getModuls().then(({ data }) => {
      setMovieSections(data["data"]);
    });
  }, []);

  return (
    <section className="pb-10">
      <BannerSlider />
      {movieSections.map((item) => (
        <CardSlider
          key={item.selectionId}
          url={
            "v2/cards/movies/selection-cards?itemsPerPage=12&moduleId=27&page=1&selectionId=" +
            item.selectionId
          }
          title={item.selectionTitle}
        />
      ))}
    </section>
  );
}
