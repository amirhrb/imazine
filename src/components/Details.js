import React from "react";
import { Link, useParams } from "react-router-dom";

import Carousel from "./Carousel";
import Aparat from "./Aparat";
//
import titlesJson from "../sources/data/titles";
import allImages from "../sources/images/titlesIMG/Images";

const titles = JSON.parse(titlesJson);
const Details = () => {
  const params = useParams();
  const matchedTitle = titles.find((item) => item.title === params.title);
  const matchedImages = allImages.find((item) => item.title === params.title);
  // console.log(matchedTitle);
  return (
    <div className="flex flex-col justify-start items-center w-[80vw] h-[100%]">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl">{matchedTitle.title.split("-").join(" ")}</h2>
        <Link to="/" className="btn btn-ghost">
          برگشت
        </Link>
      </div>
      <Aparat matchedTitle={matchedTitle} />
      <Carousel images={matchedImages.images} />
    </div>
  );
};

export default Details;
