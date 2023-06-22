import { useState } from "react";
import "./Swiper.css";
export const Swiper = ({
  children,
  spaceBetween = 10,
  slidePerView = 4,
}: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  let numOfDots = children - (slidePerView - 1);

  function plusSlide(n: any) {
    setCurrentSlide((value) => {
      if (n > 0) return value < children.length - 1 ? value + n : 0;
      return value <= 0 ? children.length - 1 : value + n;
    });
  }
  return (
    <div className="swiper">
      <div className="swiper-wrapper" style={{ gap: `${spaceBetween}px` }}>
        {/* {children[currentSlide]} */}
        {children.slice(currentSlide, currentSlide + slidePerView)}
      </div>
      <span className="prev" onClick={() => plusSlide(-1)}>
        &#8249;
      </span>
      <span className="next" onClick={() => plusSlide(1)}>
        &#8250;
      </span>

      <div className="swiper-pagination">
        {children.map((child: any, index: any) => {
          return (
            <span
              key={index}
              className={`${index === currentSlide ? "active" : ""}`}
              onClick={() => {
                setCurrentSlide(index);
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export const SwiperSlide = ({ children }: any) => {
  return <div className="swiper-slide">{children}</div>;
};
