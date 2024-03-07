//! Selecionar os elementos
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");

//! Método para a imagem aparecer expandida na tela
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const imgUrl = item
      .querySelector(".gallery-image")
      .getAttribute("data-src");
    lightboxImg.setAttribute("src", imgUrl);
    lightbox.style.display = "flex";
  });
});

//! Fechar a imagem usando o botão
lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});
