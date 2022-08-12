const elModalOpenBtn = document.querySelector(".modal-btn");
const elModalCloseBtn = document.querySelector(".modal-btn__open");
const elModal = document.querySelector(".navbar");

elModalOpenBtn.addEventListener("click", function () {
  elModal.classList.toggle("navbar-open");
  elModalOpenBtn.classList.toggle("modal-btn__open");
});

elModal.addEventListener("click", function () {
  elModal.classList.toggle("navbar-open");
  elModalOpenBtn.classList.toggle("modal-btn__open");
});
