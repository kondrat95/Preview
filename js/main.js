const BtnMenuBurger = document.querySelector('.header-list-menu');
const MenuBurger = document.querySelector('.header-nav');
const MenuFon = document.querySelector('.header-blur');

BtnMenuBurger.addEventListener('click', function () {
  MenuBurger.classList.toggle("activ");
  MenuFon.classList.toggle("activ");
  BtnMenuBurger.classList.toggle("open");
  document.body.classList.toggle("lock");
})



const BtnNumber = document.querySelector('.header-list__btn');
const PopapTelMy = document.querySelector('.header-list-number__link-popap');

BtnNumber.addEventListener('click', function () {
  PopapTelMy.classList.toggle("open-popap");
  document.body.classList.toggle("lock");
  MenuFon.classList.toggle("activ-popap");
})

MenuFon.addEventListener('click', function(){
  PopapTelMy.classList.remove("open-popap");
  MenuFon.classList.remove("activ-popap");
} )


const btnOneOpen = document.querySelector('.header-content-right__btnone');
const btnOneclose = document.querySelector('.header-content-right__btnone-open');
const modalOne = document.querySelector('.header-content-right__btnone-open-popap-text');


btnOneOpen.addEventListener('click', function(){
  modalOne.classList.toggle("open-modal");
  btnOneOpen.classList.toggle("close");
  btnOneclose.classList.toggle("open-btn");
})

btnOneclose.addEventListener('click', function(){
  modalOne.classList.remove("open-modal");
  btnOneOpen.classList.remove("close");
  btnOneclose.classList.remove("open-btn");
})


const btnTwoOpen = document.querySelector('.header-content-right__btntwo');
const btnTwoclose = document.querySelector('.header-content-right__btntwo-open');
const modalTwo = document.querySelector('.header-content-right__btntwo-open-popap-text');


btnTwoOpen.addEventListener('click', function(){
  modalTwo.classList.toggle("open-modal");
  btnTwoOpen.classList.toggle("close");
  btnTwoclose.classList.toggle("open-btn");
})

btnTwoclose.addEventListener('click', function(){
  modalTwo.classList.remove("open-modal");
  btnTwoOpen.classList.remove("close");
  btnTwoclose.classList.remove("open-btn");
})


const btnThreeOpen = document.querySelector('.header-content-right__btnthree');
const btnThreeclose = document.querySelector('.header-content-right__btnthree-open');
const modalThree = document.querySelector('.header-content-right__btnthree-open-popap-text');


btnThreeOpen.addEventListener('click', function(){
  modalThree.classList.toggle("open-modal");
  btnThreeOpen.classList.toggle("close");
  btnThreeclose.classList.toggle("open-btn");
})

btnThreeclose.addEventListener('click', function(){
  modalThree.classList.remove("open-modal");
  btnThreeOpen.classList.remove("close");
  btnThreeclose.classList.remove("open-btn");
})