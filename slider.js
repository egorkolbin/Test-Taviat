const slideOne = document.getElementById("slide_one");
const slideTwo = document.getElementById("slide_two");
const slideThree = document.getElementById("slide_three");

const buttonOne = document.getElementById("button_one");
const buttonTwo = document.getElementById("button_two");
const ButtonThree = document.getElementById("button_three");

const menuSlider = document.getElementById("menuSlider");
const menuListTitle = document.querySelectorAll("#listTitle");
const secondTitle = document.querySelectorAll("#secondTitle");
const thirdTitle = document.querySelectorAll(".menu_list_entres_block_title");
const fourTitle = document.querySelectorAll(
  ".menu_list_entres_block_description"
);
const priceTitle = document.querySelectorAll(".menu_list_entres_block_price");

let slide = 1;
let canSlide = true;

buttonOne.addEventListener("click", function () {
  if (canSlide) {
    canSlide = false;
    if (slide == 2) {
      var index = 0;
      length = menuListTitle.length;
      for (; index < length; index++) {
        menuListTitle[index].style.marginRight = "-1272px";
      }
      setTimeout(() => {
        var index = 0;
        length = secondTitle.length;
        for (; index < length; index++) {
          secondTitle[index].style.marginRight = "-1272px";
        }
      }, 100);
      setTimeout(() => {
        var index = 0;
        length = thirdTitle.length;
        for (; index < length; index++) {
          thirdTitle[index].style.marginRight = "-1272px";
        }
      }, 300);
      setTimeout(() => {
        var index = 0;
        length = fourTitle.length;
        for (; index < length; index++) {
          fourTitle[index].style.marginRight = "-1272px";
        }
      }, 500);
      setTimeout(() => {
        var index = 0;
        length = priceTitle.length;
        for (; index < length; index++) {
          priceTitle[index].style.marginRight = "-1272px";
        }
      }, 700);
      setTimeout(() => {
        var index = 0;
        var indexS = 0;
        var indexT = 0;
        var indexF = 0;
        var indexP = 0;
        length = menuListTitle.length;
        lengthSecondTitle = secondTitle.length;
        lengthT = thirdTitle.length;
        lengthF = fourTitle.length;
        lengthP = priceTitle.length;
        for (; index < length; index++) {
          menuListTitle[index].style.marginRight = "0px";
        }
        for (; indexS < lengthSecondTitle; indexS++) {
          secondTitle[indexS].style.marginRight = "0px";
        }
        for (; indexT < lengthT; indexT++) {
          thirdTitle[indexT].style.marginRight = "0px";
        }
        for (; indexF < lengthF; indexF++) {
          fourTitle[indexF].style.marginRight = "0px";
        }
        for (; indexP < lengthP; indexP++) {
          priceTitle[indexP].style.marginRight = "0px";
        }
        menuSlider.style.marginLeft = "0px";
        canSlide = true;
      }, 1700);
    }
    if (slide == 3) {
      var index = 0;
      length = menuListTitle.length;
      for (; index < length; index++) {
        menuListTitle[index].style.marginRight = "-2548px";
      }
      setTimeout(() => {
        var index = 0;
        length = secondTitle.length;
        for (; index < length; index++) {
          secondTitle[index].style.marginRight = "-2548px";
        }
      }, 100);
      setTimeout(() => {
        var index = 0;
        length = thirdTitle.length;
        for (; index < length; index++) {
          thirdTitle[index].style.marginRight = "-2548px";
        }
      }, 300);
      setTimeout(() => {
        var index = 0;
        length = fourTitle.length;
        for (; index < length; index++) {
          fourTitle[index].style.marginRight = "-2548px";
        }
      }, 500);
      setTimeout(() => {
        var index = 0;
        length = priceTitle.length;
        for (; index < length; index++) {
          priceTitle[index].style.marginRight = "-2548px";
        }
      }, 700);
      setTimeout(() => {
        var index = 0;
        var indexS = 0;
        var indexT = 0;
        var indexF = 0;
        var indexP = 0;
        length = menuListTitle.length;
        lengthSecondTitle = secondTitle.length;
        lengthT = thirdTitle.length;
        lengthF = fourTitle.length;
        lengthP = priceTitle.length;
        for (; index < length; index++) {
          menuListTitle[index].style.marginRight = "0px";
        }
        for (; indexS < lengthSecondTitle; indexS++) {
          secondTitle[indexS].style.marginRight = "0px";
        }
        for (; indexT < lengthT; indexT++) {
          thirdTitle[indexT].style.marginRight = "0px";
        }
        for (; indexF < lengthF; indexF++) {
          fourTitle[indexF].style.marginRight = "0px";
        }
        for (; indexP < lengthP; indexP++) {
          priceTitle[indexP].style.marginRight = "0px";
        }
        menuSlider.style.marginLeft = "0px";
        canSlide = true;
      }, 1700);
    }
    buttonOne.classList.add("active_button");
    buttonTwo.classList.remove("active_button");
    ButtonThree.classList.remove("active_button");
    setTimeout(() => {
      slide = 1;
    }, 1000);
  }
});

buttonTwo.addEventListener("click", function () {
  if (canSlide) {
    canSlide = false;
    if (slide == 1) {
      var index = 0;
      length = menuListTitle.length;
      for (; index < length; index++) {
        menuListTitle[index].style.marginLeft = "-1272px";
      }
      setTimeout(() => {
        var index = 0;
        length = secondTitle.length;
        for (; index < length; index++) {
          secondTitle[index].style.marginLeft = "-1272px";
        }
      }, 100);
      setTimeout(() => {
        var index = 0;
        length = thirdTitle.length;
        for (; index < length; index++) {
          thirdTitle[index].style.marginLeft = "-1272px";
        }
      }, 300);
      setTimeout(() => {
        var index = 0;
        length = fourTitle.length;
        for (; index < length; index++) {
          fourTitle[index].style.marginLeft = "-1272px";
        }
      }, 500);
      setTimeout(() => {
        var index = 0;
        length = priceTitle.length;
        for (; index < length; index++) {
          priceTitle[index].style.marginLeft = "-1272px";
        }
      }, 700);
      setTimeout(() => {
        var index = 0;
        var indexS = 0;
        var indexT = 0;
        var indexF = 0;
        var indexP = 0;
        length = menuListTitle.length;
        lengthSecondTitle = secondTitle.length;
        lengthT = thirdTitle.length;
        lengthF = fourTitle.length;
        lengthP = priceTitle.length;
        for (; index < length; index++) {
          menuListTitle[index].style.marginLeft = "0px";
        }
        for (; indexS < lengthSecondTitle; indexS++) {
          secondTitle[indexS].style.marginLeft = "0px";
        }
        for (; indexT < lengthT; indexT++) {
          thirdTitle[indexT].style.marginLeft = "0px";
        }
        for (; indexF < lengthF; indexF++) {
          fourTitle[indexF].style.marginLeft = "0px";
        }
        for (; indexP < lengthP; indexP++) {
          priceTitle[indexP].style.marginLeft = "0px";
        }
        menuSlider.style.marginLeft = "-636px";
        canSlide = true;
      }, 1700);
    }
    if (slide == 3) {
      var index = 0;
      length = menuListTitle.length;
      for (; index < length; index++) {
        menuListTitle[index].style.marginRight = "-1272px";
      }
      setTimeout(() => {
        var index = 0;
        length = secondTitle.length;
        for (; index < length; index++) {
          secondTitle[index].style.marginRight = "-1272px";
        }
      }, 100);
      setTimeout(() => {
        var index = 0;
        length = thirdTitle.length;
        for (; index < length; index++) {
          thirdTitle[index].style.marginRight = "-1272px";
        }
      }, 300);
      setTimeout(() => {
        var index = 0;
        length = fourTitle.length;
        for (; index < length; index++) {
          fourTitle[index].style.marginRight = "-1272px";
        }
      }, 500);
      setTimeout(() => {
        var index = 0;
        length = priceTitle.length;
        for (; index < length; index++) {
          priceTitle[index].style.marginRight = "-1272px";
        }
      }, 700);
      setTimeout(() => {
        var index = 0;
        var indexS = 0;
        var indexT = 0;
        var indexF = 0;
        var indexP = 0;
        length = menuListTitle.length;
        lengthSecondTitle = secondTitle.length;
        lengthT = thirdTitle.length;
        lengthF = fourTitle.length;
        lengthP = priceTitle.length;
        for (; index < length; index++) {
          menuListTitle[index].style.marginRight = "0px";
        }
        for (; indexS < lengthSecondTitle; indexS++) {
          secondTitle[indexS].style.marginRight = "0px";
        }
        for (; indexT < lengthT; indexT++) {
          thirdTitle[indexT].style.marginRight = "0px";
        }
        for (; indexF < lengthF; indexF++) {
          fourTitle[indexF].style.marginRight = "0px";
        }
        for (; indexP < lengthP; indexP++) {
          priceTitle[indexP].style.marginRight = "0px";
        }
        menuSlider.style.marginLeft = "-636px";
        canSlide = true;
      }, 1700);
    }
    buttonTwo.classList.add("active_button");
    buttonOne.classList.remove("active_button");
    ButtonThree.classList.remove("active_button");
    setTimeout(() => {
      slide = 2;
    }, 1000);
  }
});

ButtonThree.addEventListener("click", function () {
  if (canSlide) {
    canSlide = false;
    if (slide == 1) {
      var index = 0;
      length = menuListTitle.length;
      for (; index < length; index++) {
        menuListTitle[index].style.marginLeft = "-2548px";
      }
      setTimeout(() => {
        var index = 0;
        length = secondTitle.length;
        for (; index < length; index++) {
          secondTitle[index].style.marginLeft = "-2548px";
        }
      }, 100);
      setTimeout(() => {
        var index = 0;
        length = thirdTitle.length;
        for (; index < length; index++) {
          thirdTitle[index].style.marginLeft = "-2548px";
        }
      }, 300);
      setTimeout(() => {
        var index = 0;
        length = fourTitle.length;
        for (; index < length; index++) {
          fourTitle[index].style.marginLeft = "-2548px";
        }
      }, 500);
      setTimeout(() => {
        var index = 0;
        length = priceTitle.length;
        for (; index < length; index++) {
          priceTitle[index].style.marginLeft = "-2548px";
        }
      }, 700);
      setTimeout(() => {
        var index = 0;
        var indexS = 0;
        var indexT = 0;
        var indexF = 0;
        var indexP = 0;
        length = menuListTitle.length;
        lengthSecondTitle = secondTitle.length;
        lengthT = thirdTitle.length;
        lengthF = fourTitle.length;
        lengthP = priceTitle.length;
        for (; index < length; index++) {
          menuListTitle[index].style.marginLeft = "0px";
        }
        for (; indexS < lengthSecondTitle; indexS++) {
          secondTitle[indexS].style.marginLeft = "0px";
        }
        for (; indexT < lengthT; indexT++) {
          thirdTitle[indexT].style.marginLeft = "0px";
        }
        for (; indexF < lengthF; indexF++) {
          fourTitle[indexF].style.marginLeft = "0px";
        }
        for (; indexP < lengthP; indexP++) {
          priceTitle[indexP].style.marginLeft = "0px";
        }
        menuSlider.style.marginLeft = "-1272px";
        canSlide = true;
      }, 1700);
    }
    if (slide == 2) {
      var index = 0;
      length = menuListTitle.length;
      for (; index < length; index++) {
        menuListTitle[index].style.marginLeft = "-1272px";
      }
      setTimeout(() => {
        var index = 0;
        length = secondTitle.length;
        for (; index < length; index++) {
          secondTitle[index].style.marginLeft = "-1272px";
        }
      }, 100);
      setTimeout(() => {
        var index = 0;
        length = thirdTitle.length;
        for (; index < length; index++) {
          thirdTitle[index].style.marginLeft = "-1272px";
        }
      }, 300);
      setTimeout(() => {
        var index = 0;
        length = fourTitle.length;
        for (; index < length; index++) {
          fourTitle[index].style.marginLeft = "-1272px";
        }
      }, 500);
      setTimeout(() => {
        var index = 0;
        length = priceTitle.length;
        for (; index < length; index++) {
          priceTitle[index].style.marginLeft = "-1272px";
        }
      }, 700);
      setTimeout(() => {
        var index = 0;
        var indexS = 0;
        var indexT = 0;
        var indexF = 0;
        var indexP = 0;
        length = menuListTitle.length;
        lengthSecondTitle = secondTitle.length;
        lengthT = thirdTitle.length;
        lengthF = fourTitle.length;
        lengthP = priceTitle.length;
        for (; index < length; index++) {
          menuListTitle[index].style.marginLeft = "0px";
        }
        for (; indexS < lengthSecondTitle; indexS++) {
          secondTitle[indexS].style.marginLeft = "0px";
        }
        for (; indexT < lengthT; indexT++) {
          thirdTitle[indexT].style.marginLeft = "0px";
        }
        for (; indexF < lengthF; indexF++) {
          fourTitle[indexF].style.marginLeft = "0px";
        }
        for (; indexP < lengthP; indexP++) {
          priceTitle[indexP].style.marginLeft = "0px";
        }
        menuSlider.style.marginLeft = "-1272px";
        canSlide = true;
      }, 1700);
    }
    ButtonThree.classList.add("active_button");
    buttonOne.classList.remove("active_button");
    buttonTwo.classList.remove("active_button");
    setTimeout(() => {
      slide = 3;
    }, 1000);
  }
});
