import React from "react";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";

const FeatureText = ({ title, description }) => {
  return (
    <div className="w-full md:w-1/2 p-4 md:p-0 md:pt-12">
      <h3 className="text-2xl md:text-3xl text-center md:text-justify font-bold tracking-wide leading-tight pb-6">
        {title}
      </h3>
      <p className="text-lg md:text-xl lg:text-2xl text-lightgray max-w-lg">
        {description}
      </p>
    </div>
  );
};
const FeatureImage = ({ dataAos, img }) => {
  return (
    <div
      className="relative w-full md:w-1/2 flex justify-center"
      data-aos={dataAos}
    >
      <Image
        height={200} // NOTE: can also use layout="fill" to hide on smartphone
        width={200}
        loader={({ src }) => src}
        unoptimized
        src={img}
        alt="Feature image"
        className="w-full h-full z-20 object-contain"
      ></Image>
    </div>
  );
};

const FeatureBox = ({ feature }) => {
  return (
    <div className="flex flex-col md:flex-row py-8 lg:py-16">
      <FeatureText title={feature.title} description={feature.description} />
      <FeatureImage img={feature.img} dataAos="fade-left"></FeatureImage>
    </div>
  );
};

const ReversedFeatureBox = ({ feature }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row py-4 lg:py-16">
      <FeatureImage img={feature.img} dataAos="fade-right"></FeatureImage>
      <FeatureText title={feature.title} description={feature.description} />
    </div>
  );
};

const Feature = () => {
  const { t } = useTranslation();
  const features = [
    {
      img: "/images/tokyo/tea-svgrepo-com.svg",
      title: t("feature.simple-title"),
      description: t("feature.simple-description"),
    },
    {
      img: "/images/tokyo/koi-svgrepo-com.svg",
      title: t("feature.interactive-title"),
      description: t("feature.interactive-description"),
    },
    {
      img: "/images/tokyo/ninja-warrior-svgrepo-com.svg",
      title: t("feature.trustless-title"),
      description: t("feature.trustless-description"),
    },
  ];

  const boxes = features.map((feature, index) => {
    return index % 2 == 0 ? (
      <FeatureBox key={index} feature={feature}></FeatureBox>
    ) : (
      <ReversedFeatureBox key={index} feature={feature}></ReversedFeatureBox>
    );
  });

  return (
    <section className="home-section" id="feature">
      <h3 className="text-3xl leading-8 font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        <span className="text-red-500">Fundamentalism</span> + NFT
      </h3>
      {boxes}
    </section>
  );
};

export default Feature;
