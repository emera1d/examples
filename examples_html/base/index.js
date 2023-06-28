// onInit > восстанавливает данные из стора
// инициализируем переменные и вешаем обработчики

// - открываем попап
// - вводим значение
// - добавляем todo item в список
// - сохраняем в стор

let count = 0;
const LOCALSTORAGE_KEY_NAME = 'todo_data';

// 
const btnOpen = document.querySelector('.button_open');
const btnClose = document.querySelector('.button_close');
const btnAdd = document.querySelector('.button_add');
const modal = document.querySelector('.modal');
const list = document.querySelector('.list');

// callbacks
const onClickOpen = () => modal.classList.add('opened');
const onClickClose = () => modal.classList.remove('opened');
const onClickAdd = () => {
	const inp = document.querySelector('.input_text');
	const text = inp.value;

	if (text !== '') {
		count += 1;
		list.innerHTML += `<div>${count}: ${text}</div>`;

		localStorage.setItem(LOCALSTORAGE_KEY_NAME, JSON.stringify(list.innerHTML));
		modal.classList.remove('opened');
	}
}

const onInit = () => {
	const localStorageData = localStorage.getItem(LOCALSTORAGE_KEY_NAME);
	const data = JSON.parse(localStorageData);
	list.innerHTML = data;
};

// handlers
btnOpen.addEventListener('click', onClickOpen);
btnClose.addEventListener('click', onClickClose);
btnAdd.addEventListener('click', onClickAdd);

onInit();
