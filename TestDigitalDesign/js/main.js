'use strict';

/**
 * Кнопка возврата к началу страницы.
 */
const back = document.querySelector('.back')
back.onclick = function setScrollIntoViewOption(top) {
	const headerContent = document.querySelector('.header__content');
	headerContent.scrollIntoView({
	block: "center",
	inline: "nearest",
	behavior: "smooth",
	})
}
/**
 * Кнопка переноса к введению.
 */
const introduction = document.querySelector('.introduction-link')
introduction.onclick = function setScrollIntoViewOption(top) {
	const introductionBtn = document.querySelector('.introduction');
	introductionBtn.scrollIntoView({
	block: "start",
	inline: "nearest",
	behavior: "smooth",
	})
}
/**
 * Кнопка переноса к руководству.
 */
const manual = document.querySelector('.manual-link')
manual.onclick = function setScrollIntoViewOption(top) {
	const manualBtn = document.querySelector('.manual');
	manualBtn.scrollIntoView({
	block: "start",
	inline: "nearest",
	behavior: "smooth",
	})
}
/**
 * Кнопка переноса к опция.
 */
const grade = document.querySelector('.grade-link')
grade.onclick = function setScrollIntoViewOption(top) {
	const gradeBtn = document.querySelector('.grade');
	gradeBtn.scrollIntoView({
	block: "start",
	inline: "nearest",
	behavior: "smooth",
	})
}
/**
 * Анимация кнопки возврата.
 */
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				animItem.classList.remove('_active');
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
}
/**
 *  Функция возврата информацию о 
 * выбранной дате в консоль.
 */
let date = new Date('12, 28, 2022');
let weekday = date.getDay();
let options = { weekday: 'long' };
let day = date.getDate();
let formatter = new Intl.DateTimeFormat("ru", {
	day: "numeric",
});
let numberweek = date.getDay();
if (day > 0 ) {
	numberweek = 1;
	if (day > 7) {
		numberweek = 2;
		if (day > 14) {
			numberweek = 3;
			if (day > 21) {
				numberweek = 4;
				if (day > 28) {
					numberweek = 5;
				}
			}
		}
	}
}
let month = date.getMonth();
var arr=['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря',];
let year = date.getFullYear(Date);

console.log(new Intl.DateTimeFormat('ru-RU', options).format(date), ', ', numberweek, 'неделя', (arr[month]), year, 'года',);

