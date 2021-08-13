$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  arrows: true,
  draggable: true,
  // infinite: false,
  prevArrow:
    ' <button type="button" class="slider-prev slick-arrow"><ion-icon name="chevron-back-outline"></ion-icon></button>',
  nextArrow:
    '<button type="button" class="slider-next slick-arrow"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  mobileFirst: true,
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  asNavFor: ".slider-for",

  responsive: [
    {
      breakpoint: 767,
      settings: {
        vertical: true,
        verticalSwiping: true,
      },
    },
  ],
});

$(".count-down").countdown("2022/01/01", function (event) {
  $(this).html(
    event.strftime(`
      <div class="day-info">
        <span class="day line">%D</span>
        <span class="day-title">days</span>
      </div>

      <div class="hour-info">
        <span class="hour line">%H</span>
        <span class="hour-title">hours</span>
      </div>

      <div class="minute-info">
        <span class="minute line">%M</span>
        <span class="minute-title">mins</span>
      </div>

      <div class="second-info">
        <span class="second line">%S</span>
        <span class="second-title">secs</span>
      </div>

    `)
  );
});

// var countDownDate = new Date("Sep 26, 2023 00:00:00").getTime();

// const countDown = () => {
//   var nowDate = new Date().getTime();
//   var distance = countDownDate - nowDate;

//   const second = 1000;
//   const min = second * 60;
//   const hour = min * 60;
//   const day = hour * 24;

//   requestAnimationFrame(countDown);
//   const remindDay = Math.floor(distance / day);

//   document.querySelector(".day").innerHTML = `${remindDay}`;

//   const remindHour = Math.floor((distance % day) / min);
//   document.querySelector(".hour").innerHTML = `${remindHour}`;

//   const remindMin = Math.floor((distance % hour) / min);
//   document.querySelector(".minute").innerHTML = `${remindMin}`;

//   const remindSec = Math.floor((distance % min) / second);
//   document.querySelector(".second").innerHTML = `${remindSec}`;
// };

// countDown();
