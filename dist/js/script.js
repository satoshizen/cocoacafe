
jQuery(function ($) {
  // ページトップボタン
  // var topBtn = $('.js-pagetop')
  // topBtn.hide()

  // // ページトップボタンの表示設定
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 70) {
  //     // 指定px以上のスクロールでボタンを表示
  //     topBtn.fadeIn()
  //   } else {
  //     // 画面が指定pxより上ならボタンを非表示
  //     topBtn.fadeOut()
  //   }
  // })

  // // ページトップボタンをクリックしたらスクロールして上に戻る
  // topBtn.click(function () {
  //   $('body,html').animate(
  //     {
  //       scrollTop: 0,
  //     },
  //     300,
  //     'swing'
  //   )
  //   return false
  // })

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  // $(document).on('click', 'a[href*="#"]', function () {
  //   let time = 400
  //   let header = $('header').innerHeight()
  //   let target = $(this.hash)
  //   if (!target.length) return
  //   let targetY = target.offset().top - header
  //   $('html,body').animate({ scrollTop: targetY }, time, 'swing')
  //   return false
  // })

  $(function () {
    $('.js-accordion-btn').on('click', function () {
      $(this).next('.js-accordion-content').slideToggle(200)
      $(this).toggleClass('open')
      $('.js-accordion-btn').not($(this)).next('.js-accordion-content').slideUp(200)
      $('.js-accordion-btn').not($(this)).removeClass('open')
    })
  })

  // スライダー
  //サムネイル
  const sliderThumbnail = new Swiper('.js-slider-thumbs', {
    slidesPerView: 3,
    spaceBetween: 10, // スライド間の余白（px）
    freeMode: true,
    slideToClickedSlide: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      // ブレークポイント
      768: {
        // 画面幅600px以上で適用
        slidesPerView: 5,
      },
    },
  })

  //スライダー
  const slider = new Swiper('.js-slider-main', {
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    slidesPerView: 1,
    loop: true,
    loopedSlides: 5,
    centeredSlides: true,
    disableOnInteraction: true,
    thumbs: {
      swiper: sliderThumbnail,
    },
  })

  // ハンバーガーメニュー
  $('.js-hamburger-btn').click(function () {
    $(this).toggleClass('open');
    if($(this).hasClass('open')){
      $('.js-drawer').fadeIn();
    }else{
      $('.js-drawer').fadeOut();
    }
  })

  $(window).on('load resize', function(){
    var wid = $(window).width();
    if (wid >= 768) {
      $('.js-drawer').css('display','block');
    } else {
      $('.js-drawer').css('display','none');
    }
  });
  
});
