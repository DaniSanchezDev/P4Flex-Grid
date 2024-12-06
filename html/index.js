// seleccionamos el div con clase rating y las estrellas
document.querySelectorAll(".rating").forEach((rating) => {
  const stars = rating.querySelectorAll(".star");
  const scoreElement = rating.nextElementSibling;
  // foreach de cada estrella para cuando hagamos click añadir evento y aumente la puntuación
  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const score = star.getAttribute("data-value");
      scoreElement.textContent = `Puntuación: ${score}`;

      // Resaltar estrellas seleccionadas
      stars.forEach(
        (s) =>
          (s.style.color =
            parseInt(s.getAttribute("data-value")) <= score ? "gold" : "gray")
      );
    });
  });
});
