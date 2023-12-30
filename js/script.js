"use strict";

const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
    initRatings();
}
// Основная функция
function initRatings() {
    let ratingActive, ratingValue;

    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }

    // Инициализируем конкретный рейтинг
    function initRating(rating) {
        initRatingVars(rating);
        setRatingActiveWidth();

        if (rating.classList.contains('rating_set')) {
            setRating(rating);
        }
    }

    // Инициализация переменных
    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    }

    // Изменяем ширину активных звёзд
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index * 20;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }
    // Возможность ставить оценку
    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating__item');
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener("mouseover", function (e) {
                // Обновление переменных
                initRatingVars(rating);
                // Обновление активных звезд
                setRatingActiveWidth(ratingItem.value);
            });
            ratingItem.addEventListener("mouseleave", function (e) {
                // Обновление активных звёзд
                setRatingActiveWidth();
            });
            ratingItem.addEventListener("click", function (e) {
                // Обновление переменных
                initRatingVars(rating);
                if (rating.dataset.ajax) {
                    // Отправить на сервер
                    setRatingValue(ratingItem.value, rating);
                } else {
                    // Отобразить указынную оценку
                    ratingValue.innerHTML = index + 1;
                    setRatingActiveWidth();
                }
            });
        }
    }
}
