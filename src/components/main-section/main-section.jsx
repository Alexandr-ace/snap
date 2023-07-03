import React from "react";
import { Button } from "../button";
import MenImage from "../../images/image-hero-desktop.png";
import MenImageMobile from "../../images/image-hero-mobile.png";
import { ReactComponent as Databiz } from "../../images/client-databiz.svg";
import { ReactComponent as Audiophile } from "../../images/client-audiophile.svg";
import { ReactComponent as Meet } from "../../images/client-meet.svg";
import { ReactComponent as Maker } from "../../images/client-maker.svg";

const MainSection = () => {
  return (
    <section className="mt-7 flex w-full">
      <div className="relative mt-12 text-left">
        <h1 className="mt-6 whitespace-pre-line text-8xl font-black">
          {"Make\n remote work"}
        </h1>
        <p className="my-12 whitespace-pre-line text-lg text-medium-gray">{`Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n Amet ullam dolorum animi atque vitae exercitationem\n quibusdam maiores adipisci qui harum.`}</p>
      </div>
    </section>
  );
};

export default MainSection;
