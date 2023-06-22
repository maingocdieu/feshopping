import { useEffect, useRef, useState } from "react";
import style from "./Slide.module.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const pagesize = 5;
export const Slide = ({ children, slidesToShow }: any) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [totalPage, setTotalPage] = useState(() => {
    return Math.ceil(children.length / 4);
  });

  const [pages, setPages] = useState(() => {
    return new Array(totalPage).fill(false);
  });

  useEffect(() => {
    pages[0] = true
    setPages([...pages])
  }, []);

  return (
    <>
      <div>
        <div className={style.slideContainer}>
          <button
            className={`${style.handle} ${style.lefthandle}`}
            onClick={() => {
              setSliderIndex((value) => {
                if (value <= 0) {
                  pages[value] = false;
                  pages[totalPage - 1] = true;
                  return totalPage - 1;
                }
                pages[value] = false;
                pages[value - 1] = true;
                return value - 1;
              });
            }}
          >
            <div className="text">&#8249;</div>
          </button>
          <div
            className={style.slider}
            style={
              {
                "--slider-index": sliderIndex,
                "--items-per-screen": 4,
              } as React.CSSProperties
            }
          >
            {children}
          </div>

          <button
            className={`${style.handle} ${style.righthandle}`}
            onClick={() => {
              setSliderIndex((value) => {
                for (let i = 0; i < pages.length; i++) {
                  pages[i] = false;
                }
                if (value >= totalPage - 1) {
                  pages[0] = true;
                  return 0;
                }
                pages[value + 1] = true;
                return value + 1;
              });
            }}
          >
            <div className="text">&#8250;</div>
          </button>
        </div>
        <div className={style.header}>
          {pages.map((value, index) => (
            <div style={value === true ? { color: "red" } : {}} key={index}>
              *
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
