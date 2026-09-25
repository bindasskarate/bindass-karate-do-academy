/* ===== HOME MENU ONLY ===== */

(function () {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("open");
        });

    }

})();
// ===== Gallery Lightbox =====

const galleryImages = document.querySelectorAll('.gallery-container img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
/* ===== PROFESSIONAL BKDA GALLERY ===== */

const galleryImages = [
    "karate1.jpg.jpeg",
    "karate2.jpg",
    "karate3.jpg",
    "karate4.jpg",
    "karate5.jpg",
    "karate6.jpg",
    "karate7.jpg"
];

let currentGalleryIndex = 0;

const galleryMainImage = document.getElementById("galleryMainImage");
const galleryThumbs = document.querySelectorAll(".gallery-thumb");
const galleryPrev = document.getElementById("galleryPrev");
const galleryNext = document.getElementById("galleryNext");

function showGalleryImage(index) {

    if (!galleryMainImage) return;

    currentGalleryIndex =
        (index + galleryImages.length) % galleryImages.length;

    galleryMainImage.style.opacity = "0";

    setTimeout(() => {
        galleryMainImage.src = galleryImages[currentGalleryIndex];
        galleryMainImage.style.opacity = "1";
    }, 150);

    galleryThumbs.forEach((thumb, i) => {
        thumb.classList.toggle(
            "active",
            i === currentGalleryIndex
        );
    });
}

/* Next */
if (galleryNext) {
    galleryNext.addEventListener("click", () => {
        showGalleryImage(currentGalleryIndex + 1);
    });
}

/* Previous */
if (galleryPrev) {
    galleryPrev.addEventListener("click", () => {
        showGalleryImage(currentGalleryIndex - 1);
    });
}

/* Thumbnail click */
galleryThumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
        showGalleryImage(index);
    });
});
