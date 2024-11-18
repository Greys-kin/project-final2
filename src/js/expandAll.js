const readMore = document.querySelector(".content__link-more");
const articleContent = document.querySelector(".content__text");

readMore.addEventListener("click", expand);

function expand() {
  if (!articleContent.classList.contains("expanded")) {
    articleContent.classList.add("expanded");
    readMore.classList.add("active");
    readMore.textContent = "Скрыть";
  } else if (articleContent.classList.contains("expanded")) {
    articleContent.classList.remove("expanded");
    readMore.classList.remove("active");
    readMore.textContent = "Читать далее";
  }
}

const expandBtn = document.querySelector(".expand-btn");
const expandBtnTech = document.querySelector(".expand-btn--tech");
const swiperBrandsContent = document.querySelector(".swiper--brands");
const swiperTechContent = document.querySelector(".swiper--tech");

expandBtn.addEventListener("click", expandContent);
expandBtnTech.addEventListener("click", expandTechContent);

function expandContent() {
  if (!swiperBrandsContent.classList.contains("expanded")) {
    swiperBrandsContent.classList.add("expanded");
    expandBtn.classList.add("active");
    expandBtn.textContent = "Скрыть";
  } else if (swiperBrandsContent.classList.contains("expanded")) {
    swiperBrandsContent.classList.remove("expanded");
    expandBtn.classList.remove("active");
    expandBtn.textContent = "Показать все";
  }
}

function expandTechContent() {
  if (!swiperTechContent.classList.contains("expanded")) {
    swiperTechContent.classList.add("expanded");
    expandBtnTech.classList.add("active");
    expandBtnTech.textContent = "Скрыть";
  } else if (swiperTechContent.classList.contains("expanded")) {
    swiperTechContent.classList.remove("expanded");
    expandBtnTech.classList.remove("active");
    expandBtnTech.textContent = "Показать все";
  }
}
