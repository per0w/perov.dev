import Image from "next/image";

import photo from "./photo-main.png";
import { SECTIONS_IDS } from "@/constants/common";
import { Section } from "@/ui/section/section";

export const Hero = () => {
  return (
    <Section id={SECTIONS_IDS.hero}>
      <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
        <div className="flex items-center">
          <div className="relative p-3 rounded  md:p-8">
            <div className="rounded-lg">
              <Image
                className="float-left rounded mr-4 mb-2"
                src={photo}
                alt="main photo"
                width={370}
                height={490}
                style={{ width: "370px", height: "auto" }}
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-left">
            <p className="max-w-md mx-auto mt-3 text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl font-monospace">
              Привет! Меня зовут{" "}
              <span className="font-semibold text-blue-500">
                Владимир Перов
              </span>
            </p>
            <p className="font-monospace">Я веб-разработчик.</p>
            <div className="mt-5 sm:flex md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href={"/blog/cv.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
                >
                  Открыть CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
