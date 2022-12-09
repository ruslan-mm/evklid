$(".accordion").accordion({
  heightStyle: "content"
  });


  document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
    btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
      tabsBtn.classList.remove('tabs-item--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
      });
      });

  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
      document.querySelector('#menu').classList.toggle('is-active')
    })
    document.querySelector('#close-menu').addEventListener('click', function() {
      document.querySelector('#menu').classList.toggle('is-active')
    })
  })

  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#header__svg').addEventListener('click', function() {
      document.querySelector('#input').classList.toggle('input-active')
    })
    document.querySelector('#close-search').addEventListener('click', function() {
      document.querySelector('#input').classList.toggle('input-active')
    })
  })

  const swiper = new Swiper('.swiper', {
    // slidesPerView: 1,
    loop: true,
    // пагинация
    pagination: {
    el: '.swiper-pagination',
    clickable: true
    },
    // навигация
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    });
