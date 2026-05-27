/*
const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');
const imagePreview = document.getElementById('imagePreview');

uploadButton.addEventListener('click', () => {
    fileInput.click(); // Имитируем клик по скрытому input
});

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block'; // Показываем изображение
        };
        reader.readAsDataURL(file);
    }
});

*/


