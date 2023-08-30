// Obtén los botones "Suspender"
const suspendButtons = document.querySelectorAll(".suspender");

// Obtén la ventana modal y los elementos dentro de la modal
const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const modalCardName = document.getElementById("modalCardName");
const modalCardDescription = document.getElementById("modalCardDescription");
const confirmButton = document.getElementById("confirmSuspension");

// Agrega un evento de clic a cada botón "Suspender"
suspendButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Obtén los detalles de la carta desde el contenido de la columna correspondiente
        const cardColumn = button.closest(".columna");
        const cardImage = cardColumn.querySelector(".imagen_carta img");
        const cardName = cardColumn.querySelector(".nombre_carta h2").textContent;
        const cardDescription = cardColumn.querySelector(".descripcion_carta p").textContent;

        // Rellena los elementos de la ventana modal con los detalles de la carta seleccionada
        modalImage.src = cardImage.src;
        modalCardName.textContent = cardName;
        modalCardDescription.textContent = cardDescription;

        // Muestra la ventana modal
        modal.style.display = "block";
    });
});

// Cierra la ventana modal cuando se hace clic en el botón de cierre (X)
document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
});

// Cierra la ventana modal cuando se hace clic fuera de ella
window.addEventListener("click", event => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Ejecuta alguna acción al confirmar la suspensión
confirmButton.addEventListener("click", () => {
    // Aquí puedes agregar la lógica para suspender la carta
    // Por ejemplo, puedes hacer una petición AJAX al servidor
    modal.style.display = "none"; // Cierra la ventana modal después de la acción
});
