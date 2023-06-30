import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideBar } from "../sidebar/Sidebar";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="ml-4 mt-20 w-[1000px]">
        <div>
          <ul className="flex gap-2 border-b-2">
            <li className="p-1 text-xl hover:border-b-4 hover:text-yellow-300 0 hover:border-yellow-300">
              Phổ biến
            </li>
            <li className="p-1 text-xl hover:border-b-4 hover:text-yellow-300 hover:border-yellow-300">
              Sản phấm mới
            </li>
            <li className="p-1 text-xl hover:border-b-4 hover:text-yellow-300 hover:border-yellow-300">
              Mua nhiều
            </li>
            <li className="p-1 text-xl hover:border-b-4 hover:text-yellow-300 hover:border-yellow-300">
              Giá từ thấp đến cao
            </li>
            <li className="p-1 text-xl hover:border-b-4 hover:text-yellow-300 hover:border-yellow-300">
              Giá từ cao đến thấ<p></p>
            </li>
            <li className="p-1 text-xl hover:border-b-4 hover:text-yellow-300 hover:border-yellow-300">
              Giảm giá nhiều
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap">
          <Link to="test" className="w-[calc(100%/4)] p-3 hover:bg-slate-400 cursor-pointer">
            <img
              src="https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/06/tui-xach-mlb-monogram-embossed-hobo-bag-new-york-yankees-3abqs022n-50crs-mau-trang-62a6b069c10b7-13062022103505.jpg"
              alt=""
            />
            <div className="container-multiline text-left">
              <div className="ellipsis-multiline">
                Túi Xách MLB Monogram Embossed Hobo Bag New York Yankees
                3ABQS022N-50CRS Màu Trắng
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            </div>
            <div className="flex justify-between text-lg">
              <span className="text-red-700 font-bold">2.540.000 d</span>
              <span className="after:content-[''] after:w-[105%] after:block after:h-[1px] after:bg-black relative after:absolute after:top-[50%]">3.200.000 d</span>
            </div>
          </Link>
          <Link to="test" className="w-[calc(100%/4)] p-3 hover:bg-slate-400 cursor-pointer">
            <img
              src="https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/06/tui-xach-mlb-monogram-embossed-hobo-bag-new-york-yankees-3abqs022n-50crs-mau-trang-62a6b069c10b7-13062022103505.jpg"
              alt=""
            />
            <div className="container-multiline text-left">
              <div className="ellipsis-multiline">
                Túi Xách MLB Monogram Embossed Hobo Bag New York Yankees
                3ABQS022N-50CRS Màu Trắng
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            </div>
            <div className="flex justify-between text-lg">
              <span className="text-red-700 font-bold">2.540.000 d</span>
              <span className="after:content-[''] after:w-[105%] after:block after:h-[1px] after:bg-black relative after:absolute after:top-[50%]">3.200.000 d</span>
            </div>
          </Link>
          <Link to="test" className="w-[calc(100%/4)] p-3 hover:bg-slate-400 cursor-pointer">
            <img
              src="https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/06/tui-xach-mlb-monogram-embossed-hobo-bag-new-york-yankees-3abqs022n-50crs-mau-trang-62a6b069c10b7-13062022103505.jpg"
              alt=""
            />
            <div className="container-multiline text-left">
              <div className="ellipsis-multiline">
                Túi Xách MLB Monogram Embossed Hobo Bag New York Yankees
                3ABQS022N-50CRS Màu Trắng
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            </div>
            <div className="flex justify-between text-lg">
              <span className="text-red-700 font-bold">2.540.000 d</span>
              <span className="after:content-[''] after:w-[105%] after:block after:h-[1px] after:bg-black relative after:absolute after:top-[50%]">3.200.000 d</span>
            </div>
          </Link>
          <Link to="test" className="w-[calc(100%/4)] p-3 hover:bg-slate-400 cursor-pointer">
            <img
              src="https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/06/tui-xach-mlb-monogram-embossed-hobo-bag-new-york-yankees-3abqs022n-50crs-mau-trang-62a6b069c10b7-13062022103505.jpg"
              alt=""
            />
            <div className="container-multiline text-left">
              <div className="ellipsis-multiline">
                Túi Xách MLB Monogram Embossed Hobo Bag New York Yankees
                3ABQS022N-50CRS Màu Trắng
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            </div>
            <div className="flex justify-between text-lg">
              <span className="text-red-700 font-bold">2.540.000 d</span>
              <span className="after:content-[''] after:w-[105%] after:block after:h-[1px] after:bg-black relative after:absolute after:top-[50%]">3.200.000 d</span>
            </div>
          </Link>
          <Link to="test" className="w-[calc(100%/4)] p-3 hover:bg-slate-400 cursor-pointer">
            <img
              src="https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/06/tui-xach-mlb-monogram-embossed-hobo-bag-new-york-yankees-3abqs022n-50crs-mau-trang-62a6b069c10b7-13062022103505.jpg"
              alt=""
            />
            <div className="container-multiline text-left">
              <div className="ellipsis-multiline">
                Túi Xách MLB Monogram Embossed Hobo Bag New York Yankees
                3ABQS022N-50CRS Màu Trắng
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            </div>
            <div className="flex justify-between text-lg">
              <span className="text-red-700 font-bold">2.540.000 d</span>
              <span className="after:content-[''] after:w-[105%] after:block after:h-[1px] after:bg-black relative after:absolute after:top-[50%]">3.200.000 d</span>
            </div>
          </Link>
          <Link to="test" className="w-[calc(100%/4)] p-3 hover:bg-slate-400 cursor-pointer">
            <img
              src="https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/06/tui-xach-mlb-monogram-embossed-hobo-bag-new-york-yankees-3abqs022n-50crs-mau-trang-62a6b069c10b7-13062022103505.jpg"
              alt=""
            />
            <div className="container-multiline text-left">
              <div className="ellipsis-multiline">
                Túi Xách MLB Monogram Embossed Hobo Bag New York Yankees
                3ABQS022N-50CRS Màu Trắng
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            </div>
            <div className="flex justify-between text-lg">
              <span className="text-red-700 font-bold">2.540.000 d</span>
              <span className="after:content-[''] after:w-[105%] after:block after:h-[1px] after:bg-black relative after:absolute after:top-[50%]">3.200.000 d</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
