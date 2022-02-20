$(function () {
  $('.btn-comments').on('click', function () {
    $('#com').toggleClass('act');
  });
});



$(document).ready(function () {
  $(".set > a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".content").slideUp(200);
      $(".set > a span").removeClass("minus").addClass("plus");
    } else {
      $(".set > a span").removeClass("minus").addClass("plus");
      $(this).find("span").removeClass("plus").addClass("minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $('.content').slideUp(200);
      $(this).siblings('.content').slideDown(200);
    }
    return false;
  });
});

$(function(){
  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });
});

// $(document).ready(function () {
//   $(".menu").on("click", "a", function (event) {
//     //отменяем стандартную обработку нажатия по ссылке
//     event.preventDefault();
//     //забираем идентификатор бока с атрибута href
//     var id = $(this).attr('href'),
//       //узнаем высоту от начала страницы до блока на который ссылается якорь
//       top = $(id).offset().top;
//     //анимируем переход на расстояние - top за 1500 мс
//     $('body,html').animate({ scrollTop: top }, 1500);
//   });
// });


$(document).ready(function () {
  $('form').on('submit', function (e) {
    e.preventDefault();
    $('.popup-form').slideUp(400);
    setTimeout(function () {
      $('.popup-title').text('');
      $('.popup-title').css('background-color', 'white');
    }, 400);
  });

  $('.btn-popup').on('click', function () {
    $('.popup-form').show();
    $('.overlay').fadeIn(400);
  });


  $('.popup-close').on('click', function () {
    $('.overlay').fadeOut(400);
  });

  $('.btn-popup').on('click', function () {
    $('.overlay').toggleClass('active');
  });

});


$(document).ready(function () {
  $('form').on('submit', function (e) {
    e.preventDefault();
    $('.popup-form').slideUp(400);
    setTimeout(function () {
      $('.popup-title').text('Ваше сообщение успешно отправлено. Я свяжусь с Вами в ближайшее время!');
      $('.popup-title').css('background-color', 'white');
    }, 400);
    
  });

  $('.btn-popup-ask').on('click', function () {
    $('.popup-form-ask').show();
    $('.overlay-ask').fadeIn(400);
  });


  $('.popup-close-ask').on('click', function () {
    $('.overlay-ask').fadeOut(400);
  });

  $('.btn-popup-ask').on('click', function () {
    $('.overlay-ask').toggleClass('active');
  });

});

//Header

// $(function () {
//   let header = $('.menu__inner.top');

//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 1) {
//       header.addClass('active');
//     } else {
//       header.removeClass('active');
//     }
//   });
// });

$(function () {
  let header = $('.menu__inner');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });
});


$(function () {
  let header = $('.menu__inner');
  let hederHeight = header.height(); // вычисляем высоту шапки

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('fixed');
      // $('body').css({
      //   'paddingTop': hederHeight + 'px' // делаем отступ у body, равный высоте шапки
      // });
    }  else {
      header.removeClass('fixed');
      $('body').css({
        'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
      })
    }
  });
});


$('[data-fancybox]').fancybox({
  youtube: {
    controls: 0,
    showinfo: 0
  },
  vimeo: {
    color: 'f00'
  }
});



// code fragment
// the form id is myForm
$('#myForm').on('submit', function (event) {
  event.preventDefault(); // prevent reload

  var formData = new FormData(this);
  formData.append('service_id', 'service_k54famk');
  formData.append('template_id', 'template_556vuqm');
  formData.append('user_id', 'user_MdABqqjpfZS7MhTAdc9Xb');

  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
    type: 'POST',
    data: formData,
    contentType: false, // auto-detection
    processData: false // no need to parse formData to string
  }).done(function () {
    alert('Ваше сообщение успешно отправлено. Я свяжусь с Вами в ближайшее время!');
  }).fail(function (error) {
    alert('Ой... ' + JSON.stringify(error));
  });
});


// code fragment
// the form id is myForm
$('#myForm-ask').on('submit', function (event) {
  event.preventDefault(); // prevent reload

  var formData = new FormData(this);
  formData.append('service_id', 'service_k54famk');
  formData.append('template_id', 'template_556vuqm');
  formData.append('user_id', 'user_MdABqqjpfZS7MhTAdc9Xb');

  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
    type: 'POST',
    data: formData,
    contentType: false, // auto-detection
    processData: false // no need to parse formData to string
  });
});


// code fragment


// code fragment POPup
// the form id is myForm
$('#myForm-two').on('submit', function (event) {
  event.preventDefault(); // prevent reload

  var formData = new FormData(this);
  formData.append('service_id', 'service_k54famk');
  formData.append('template_id', 'template_pkn87de');
  formData.append('user_id', 'user_MdABqqjpfZS7MhTAdc9Xb');

  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
    type: 'POST',
    data: formData,
    contentType: false, // auto-detection
    processData: false // no need to parse formData to string
  }).done(function () {
    alert('Ваше сообщение успешно отправлено. Я свяжусь с Вами в ближайшее время!');
  }).fail(function (error) {
    alert('Ой... ' + JSON.stringify(error));
  });
});
// code fragment


// code fragment POPup
// the form id is myForm
$('#myForm-about').on('submit', function (event) {
  event.preventDefault(); // prevent reload

  var formData = new FormData(this);
  formData.append('service_id', 'service_k54famk');
  formData.append('template_id', 'template_pkn87de');
  formData.append('user_id', 'user_MdABqqjpfZS7MhTAdc9Xb');

  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
    type: 'POST',
    data: formData,
    contentType: false, // auto-detection
    processData: false // no need to parse formData to string
  }).done(function () {
    alert('Ваше сообщение успешно отправлено. Я свяжусь с Вами в ближайшее время!');
  }).fail(function (error) {
    alert('Ой... ' + JSON.stringify(error));
  });
});
// code fragment

// code fragment POPup
// the form id is myForm
$('#myForm-strateg').on('submit', function (event) {
  event.preventDefault(); // prevent reload

  var formData = new FormData(this);
  formData.append('service_id', 'service_k54famk');
  formData.append('template_id', 'template_pkn87de');
  formData.append('user_id', 'user_MdABqqjpfZS7MhTAdc9Xb');

  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
    type: 'POST',
    data: formData,
    contentType: false, // auto-detection
    processData: false // no need to parse formData to string
  });
 });
// code fragment




// code fragment

// the form id is myForm
$('#myForm-index').on('submit', function (event) {
  event.preventDefault(); // prevent reload

  var formData = new FormData(this);
  formData.append('service_id', 'service_k54famk');
  formData.append('template_id', 'template_pkn87de');
  formData.append('user_id', 'user_MdABqqjpfZS7MhTAdc9Xb');

  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
    type: 'POST',
    data: formData,
    contentType: false, // auto-detection
    processData: false // no need to parse formData to string
  }).done(function () {
    alert('Ваше сообщение успешно отправлено. Я свяжусь с Вами в ближайшее время!');
  }).fail(function (error) {
    alert('Ой... ' + JSON.stringify(error));
  });
});
// code fragment