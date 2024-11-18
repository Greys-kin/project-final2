import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

if (window.innerWidth < 768) {
  const swiper = new Swiper(".swiper", {
    modules: [Pagination],
    direction: "horizontal",
    loop: true,
    spaceBetween: 16,
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
    },
  });
}
