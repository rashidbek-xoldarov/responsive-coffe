const elModalOpenBtn = document.querySelector(".modal-btn");
const elModalCloseBtn = document.querySelector(".modal-btn__open");
const elModal = document.querySelector(".navbar");
const elArrowBtn = document.querySelectorAll(".arrow-btn");
const elGradientList = document.querySelectorAll(".gradient__list");
const elGradientItem = document.querySelectorAll(".gradient__item");
const elTitle = document.querySelectorAll(".gradient__title");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const fifth = document.querySelector(".fifth");

elModalOpenBtn.addEventListener("click", function () {
  elModal.classList.toggle("navbar-open");
  elModalOpenBtn.classList.toggle("modal-btn__open");
});

elModal.addEventListener("click", function () {
  elModal.classList.toggle("navbar-open");
  elModalOpenBtn.classList.toggle("modal-btn__open");
});

elArrowBtn.forEach((item, index) => {
  item.addEventListener("click", function () {
    elGradientList.forEach((element, num) => {
      if (index == num) {
        element.classList.toggle("gradient__list-open");
        item.classList.toggle("arrow-btn__rotate");
      }
    });
  });
});

elGradientItem.forEach((item, index) => {
  item.addEventListener("click", function () {
    elTitle.forEach((element, num) => {
      if (index == num) {
        let number = Math.floor(index / 3);
        switch (number) {
          case 0:
            first.innerHTML = element.innerHTML;
            break;
          case 1:
            second.innerHTML = element.innerHTML;
            break;
          case 2:
            third.innerHTML = element.innerHTML;
            break;
          case 3:
            fourth.innerHTML = element.innerHTML;
            break;
          case 4:
            fifth.innerHTML = element.innerHTML;
            break;
        }
      }
    });
  });
});
