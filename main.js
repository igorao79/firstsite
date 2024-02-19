function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Закрывает модальное окно
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Получает кнопки
let openModalButton = document.getElementById("openModalButton");
let closeModalButton = document.getElementById("closeModal");

// Назначает обработчики событий
openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);