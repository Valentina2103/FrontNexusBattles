const abrirModal = document.getElementById("abrirModal");
    const modal = document.getElementById("modal");
    const cerrarModal = document.getElementById("cerrarModal");

    abrirModal.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    cerrarModal.addEventListener("click", () => {
      modal.style.display = "none";
    });