import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Slide } from "../../component/slides/Slide";
import { Swiper, SwiperSlide } from "../../component/Swiper";
import useAuth from "../../hooks/userAuth";
import Header from "./header/Header";
import Insert from "./insert/Insert";
function formatDate(date: any) {
  if (!date) return "";
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}: ${minutes}: ${seconds}`;
}
const User = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [timeString, setTimeString] = useState("");
  useEffect(() => {
    // const a = setInterval(() => {
    //   const now = new Date();
    //   const newTimeString = formatDate(now);
    //   setTimeString(newTimeString);
    // }, 1000);
    // return () => {
    //   clearInterval(a);
    // };
  }, []);

  return (
    <>
      <div className="flex mt-[10px]">
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/0x540/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload//home-banner/22-11-2022/1363026343_giay-duca-helios-1.jpg"
            alt=""
          />
        </div>
        <div className="ml-[20px] flex flex-col justify-between">
          <img
            src="https://cdn.vuahanghieu.com/unsafe/750x250/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload//home-banner/22-11-2022/422583694_promoright-2.jpg"
            alt=""
          />
          <img
            src="https://cdn.vuahanghieu.com/unsafe/750x250/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload//home-banner/22-11-2022/422583694_promoright-2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between mt-[20px]">
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/100x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/entrusted/1657693625_3655511.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/100x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/entrusted/1657693625_3655511.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/100x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/entrusted/1667292950_giosansale.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/100x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/entrusted/1657693649_3858601.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/100x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/entrusted/1667292950_giosansale.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/100x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/entrusted/1657693686_473406.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/100x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/entrusted/1657693700_891407.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/100x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/entrusted/1657693670_837891.png"
            alt=""
          />
        </div>
      </div>

      <div className="mt-[25px]">
        <img
          src="https://cdn.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload//home-banner/24-11-2022/983668622_deal-khach-tro-lai.jpg"
          alt=""
        />
      </div>

      <div className="flex justify-between mt-[25px]">
        <div className="flex">
          <div className="uppercase text-red-400 font-bold text-2xl">
            Hàng hiệu bán chạy
          </div>
          <div className="ml-[10px] uppercase text-2xl">Cập nhật sau</div>
          <div className="ml-[10px] font-bold text-2xl">{timeString}</div>
        </div>
        <button className="border-2 border-red-600 py-2 px-4 text-red-600 uppercase">
          Mua sắm toàn bộ sản phẩm
        </button>
      </div>

      <Slide>
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/nuoc-hoa-armaf-club-de-nuit-intense-for-man-105ml-5cecf9ac49316-28052019160444.jpg"
            alt=""
          />
          <h2 className="font-bold text-center">
            Nước Hoa Nam Armaf Club De Nuit Intense For Man, 105ml
          </h2>
          <div className="flex justify-center gap-2 ">
            <span className="text-red-600 font-bold text-2xl">990.000</span>
            <span>1.800.000</span>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/nuoc-hoa-armaf-club-de-nuit-intense-for-man-105ml-5cecf9ac49316-28052019160444.jpg"
            alt=""
          />
          <h2 className="font-bold text-center">
            Nước Hoa Nam Armaf Club De Nuit Intense For Man, 105ml
          </h2>
          <div className="flex justify-center gap-2 ">
            <span className="text-red-600 font-bold text-2xl">990.000</span>
            <span>1.800.000</span>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/nuoc-hoa-armaf-club-de-nuit-intense-for-man-105ml-5cecf9ac49316-28052019160444.jpg"
            alt=""
          />
          <h2 className="font-bold text-center">
            Nước Hoa Nam Armaf Club De Nuit Intense For Man, 105ml
          </h2>
          <div className="flex justify-center gap-2 ">
            <span className="text-red-600 font-bold text-2xl">990.000</span>
            <span>1.800.000</span>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/nuoc-hoa-armaf-club-de-nuit-intense-for-man-105ml-5cecf9ac49316-28052019160444.jpg"
            alt=""
          />
          <h2 className="font-bold text-center">
            Nước Hoa Nam Armaf Club De Nuit Intense For Man, 105ml
          </h2>
          <div className="flex justify-center gap-2 ">
            <span className="text-red-600 font-bold text-2xl">990.000</span>
            <span>1.800.000</span>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/nuoc-hoa-armaf-club-de-nuit-intense-for-man-105ml-5cecf9ac49316-28052019160444.jpg"
            alt=""
          />
          <h2 className="font-bold text-center">
            Nước Hoa Nam Armaf Club De Nuit Intense For Man, 105ml
          </h2>
          <div className="flex justify-center gap-2 ">
            <span className="text-red-600 font-bold text-2xl">990.000</span>
            <span>1.800.000</span>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/nuoc-hoa-armaf-club-de-nuit-intense-for-man-105ml-5cecf9ac49316-28052019160444.jpg"
            alt=""
          />
          <h2 className="font-bold text-center">
            Nước Hoa Nam Armaf Club De Nuit Intense For Man, 105ml
          </h2>
          <div className="flex justify-center gap-2 ">
            <span className="text-red-600 font-bold text-2xl">990.000</span>
            <span>1.800.000</span>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/nuoc-hoa-armaf-club-de-nuit-intense-for-man-105ml-5cecf9ac49316-28052019160444.jpg"
            alt=""
          />
          <h2 className="font-bold text-center">
            Nước Hoa Nam Armaf Club De Nuit Intense For Man, 105ml
          </h2>
          <div className="flex justify-center gap-2 ">
            <span className="text-red-600 font-bold text-2xl">990.000</span>
            <span>1.800.000</span>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/nuoc-hoa-armaf-club-de-nuit-intense-for-man-105ml-5cecf9ac49316-28052019160444.jpg"
            alt=""
          />
          <h2 className="font-bold text-center">
            Nước Hoa Nam Armaf Club De Nuit Intense For Man, 105ml
          </h2>
          <div className="flex justify-center gap-2 ">
            <span className="text-red-600 font-bold text-2xl">990.000</span>
            <span>1.800.000</span>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/nuoc-hoa-armaf-club-de-nuit-intense-for-man-105ml-5cecf9ac49316-28052019160444.jpg"
            alt=""
          />
          <h2 className="font-bold text-center">
            Nước Hoa Nam Armaf Club De Nuit Intense For Man, 105ml
          </h2>
          <div className="flex justify-center gap-2 ">
            <span className="text-red-600 font-bold text-2xl">990.000</span>
            <span>1.800.000</span>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/nuoc-hoa-armaf-club-de-nuit-intense-for-man-105ml-5cecf9ac49316-28052019160444.jpg"
            alt=""
          />
          <h2 className="font-bold text-center">
            Nước Hoa Nam Armaf Club De Nuit Intense For Man, 105ml
          </h2>
          <div className="flex justify-center gap-2 ">
            <span className="text-red-600 font-bold text-2xl">990.000</span>
            <span>1.800.000</span>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/05/nuoc-hoa-armaf-club-de-nuit-intense-for-man-105ml-5cecf9ac49316-28052019160444.jpg"
            alt=""
          />
          <h2 className="font-bold text-center">
            Nước Hoa Nam Armaf Club De Nuit Intense For Man, 105ml
          </h2>
          <div className="flex justify-center gap-2 ">
            <span className="text-red-600 font-bold text-2xl">990.000</span>
            <span>1.800.000</span>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default User;
