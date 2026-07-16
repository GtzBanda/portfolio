const preview = document.getElementById("flyerPreview");
const previewImage = preview.querySelector("img");

const images = document.querySelectorAll(".preview-image");

images.forEach(image => {

    image.addEventListener("mouseenter", () => {

        previewImage.src = image.src;

        preview.style.display = "flex";

    });

    image.addEventListener("mouseleave", () => {

        preview.style.display = "none";

    });

});