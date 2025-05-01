document.addEventListener('DOMContentLoaded', function() {

    
    
  
    
    
    // // Слайдер мастер класс индекс4
    // document.addEventListener('DOMContentLoaded', function() {
    //     new Swiper('.swiper', {
    //         loop: true, // Включает бесконечный цикл слайдов
    //         slidesPerView: 3, // Количество слайдов на экране
    //         spaceBetween: 20, // Расстояние между слайдами
    //         pagination: {
    //             el: '.swiper-pagination',
    //             clickable: true, // Возможность клика по пагинации
    //         },
    //     });
    // });
    
    // Слайдер
    const swiper1 = new Swiper('.swiper', {
        autoHeight: false,
        loop: true,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        breakpoints: {
          390: {
            slidesPerView: 1,
          },
          834: {
            slidesPerView: 2,
          },
          1194: {
            slidesPerView: 3,
          },
          1366: {
            slidesPerView: 3,
          },
          1920: {
            slidesPerView: 3,
          },
        }
      });
    
    
    
    //   Слайдер еще
    
    const swiper = new Swiper('.swiper-2', {
        autoHeight: false,
        loop: true,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        breakpoints: {
          390: {
            slidesPerView: 1,
          },
          834: {
            slidesPerView: 1,
          },
          1194: {
            slidesPerView: 2,
          },
          1366: {
            slidesPerView: 2,
          },
          1920: {
            slidesPerView: 2,
          },
        }
      });
    
    // Модальное окно
    
      // Кнопки открытия модалки
document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const selectedOption = this.dataset.option;
      const modal = document.getElementById('modal');
      const dropdown = modal.querySelector('.custom-dropdown');
      const selectedDiv = dropdown.querySelector('.dropdown-selected');
      const options = dropdown.querySelectorAll('.dropdown-options li');
      const hiddenInput = dropdown.querySelector('input[type="hidden"]');
  
      options.forEach(option => {
        if (option.textContent.trim() === selectedOption.trim()) {
          selectedDiv.textContent = option.textContent;
          hiddenInput.value = option.dataset.value;
        }
      });
  
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Закрытие модалки
  document.querySelector('.close-modal-btn').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  document.querySelector('.modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      e.currentTarget.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  
  // Маска телефона
  document.querySelector('input[type="tel"]').addEventListener('input', function (e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = '+7 (' + (x[2] || '') + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
  });
  
  // Кастомный дропдаун
  document.querySelectorAll('.custom-dropdown').forEach(drop => {
    const selected = drop.querySelector('.dropdown-selected');
    const options = drop.querySelectorAll('.dropdown-options li');
    const input = drop.querySelector('input[type="hidden"]');
  
    selected.addEventListener('click', () => {
      drop.classList.toggle('active');
    });
  
    options.forEach(option => {
      option.addEventListener('click', () => {
        selected.textContent = option.textContent;
        input.value = option.dataset.value;
        drop.classList.remove('active');
      });
    });
  });
    
    // Лента
                document.addEventListener("DOMContentLoaded", () => {
                  const track = document.getElementById("track");
                  const content = track.querySelector(".marquee__content");
                  const clone = content.cloneNode(true);
                  track.appendChild(clone);
                });
    
    
    // Кукис
    
 
    // Навигация
    
    let currentImage = 1; 
    
    function changeImage() {
    const img = document.getElementById("image");
    
    if (currentImage === 1) {
        img.src = "img/Tarelka2.svg"; 
        currentImage = 2;
    } else if (currentImage === 2) {
        img.src = "img/Tarelka1.svg"; 
        currentImage = 3;
    } else {
        img.src = "img/Tarelka.svg"; 
        currentImage = 1;
    }
    }  
    setInterval(changeImage, 1900);
    
    document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu__toggle"); // Чекбокс бургера
    const header = document.querySelector(".header"); // Навигация
    
    menuToggle.addEventListener("change", function() {
    if (menuToggle.checked) {
    header.classList.add("active"); // Добавляем новый цвет
    } else {
    header.classList.remove("active"); // Убираем цвет
    }
    });
    });
    
   
    
            // вопросы и ответы
    
            function toggleContent(header) {
                const content = header.nextElementSibling; 
                const toggle = header.querySelector(".faq-toggle");
        
                if (content.classList.contains("show")) {
                    content.classList.remove("show");
                    toggle.classList.remove("active");
                } else {
                    content.classList.add("show");
                    toggle.classList.add("active");
                }
            }
    
    
  });

  //Печенья

// Функция для получения куки по имени
function getCookie(name) {
  let cookieArray = document.cookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
      let cookiePair = cookieArray[i].split('=');
      if (name == cookiePair[0].trim()) {
          return cookiePair[1];
      }
  }
  return null;
}

// Функция для принятия cookies и скрытия баннера
function acceptCookies() { 
  // Скрыть баннер
  document.getElementById('cookie-banner').style.display = 'none';
  
  // Установить куки с параметрами для Secure и SameSite
  document.cookie = "cookiesAccepted=true; max-age=31536000; path=/; Secure; SameSite=Lax";
  
  // Логируем куки в консоль для проверки
  console.log("Куки установлены:", document.cookie);
}

// При загрузке страницы проверяем, есть ли кука "cookiesAccepted"
window.onload = function() {
  // Проверяем, есть ли кука "cookiesAccepted"
  let cookiesAccepted = getCookie("cookiesAccepted");

  if (cookiesAccepted) {
      // Если кука есть, скрываем баннер
      document.getElementById('cookie-banner').style.display = 'none';
  } else {
      // Если куки нет, показываем баннер
      document.getElementById('cookie-banner').style.display = 'flex';
  }
}


     // /Курсы
function toggleContent(header) {
    const content = header.nextElementSibling; 
    const toggle = header.querySelector(".faq-toggle");
    
    if (content.classList.contains("show")) {
     content.classList.remove("show");
     toggle.classList.remove("active");
    } else {
     content.classList.add("show");
     toggle.classList.add("active");
    }
    }

  // Бургер
    
  document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".nav");
    const header = document.querySelector(".header");

    burger.addEventListener("click", function () {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        header.classList.toggle("active"); // Меняет цвет логотипа и иконок
    });
});



 // Главная каталог
    
 document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.custom-dropdown1');
  const selected = dropdown.querySelector('.selected');
  const options = dropdown.querySelector('.options');
  const dropdownItems = dropdown.querySelectorAll('.options div');
  const cards = document.querySelectorAll('.item');

  // Открытие/закрытие дропдауна
  selected.addEventListener('click', () => {
    const isOpen = options.style.display === 'block';
    options.style.display = isOpen ? 'none' : 'block';
    dropdown.classList.toggle('open');
  });

  // Выбор категории
  dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      const category = item.dataset.value;
      selected.innerHTML = item.innerText + ' <span class="arrow">&#9662;</span>';
      options.style.display = 'none';
      dropdown.classList.remove('open');

      // Фильтрация карточек
      cards.forEach(card => {
        if (category === 'все' || card.classList.contains(category)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Закрытие дропдауна при клике вне
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      options.style.display = 'none';
      dropdown.classList.remove('open');
    }
  });
});