<script>

const boton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

boton.addEventListener("click", () => {
    menu.classList.toggle("activo");
});

</script>