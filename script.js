/* =====================================================
   BKDA WEBSITE JAVASCRIPT
   ===================================================== */


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


/* =====================================================
   GALLERY FUNCTIONS
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ===== PROFESSIONAL BKDA GALLERY ===== */

    const professionalGalleryImages = [
        "karate1.jpg.jpeg",
        "karate2.jpg",
        "karate3.jpg",
        "karate4.jpg",
        "karate5.jpg",
        "karate6.jpg",
        "karate7.jpg"
    ];

    let currentGalleryIndex = 0;

    const galleryMainImage =
        document.getElementById("galleryMainImage");

    const galleryThumbs =
        document.querySelectorAll(".gallery-thumb");

    const galleryPrev =
        document.getElementById("galleryPrev");

    const galleryNext =
        document.getElementById("galleryNext");


    /* ===== SHOW GALLERY IMAGE ===== */

    function showGalleryImage(index) {

        if (!galleryMainImage) return;

        currentGalleryIndex =
            (index + professionalGalleryImages.length) %
            professionalGalleryImages.length;

        galleryMainImage.style.opacity = "0";

        setTimeout(function () {

            galleryMainImage.src =
                professionalGalleryImages[currentGalleryIndex];

            galleryMainImage.style.opacity = "1";

        }, 150);


        galleryThumbs.forEach(function (thumb, i) {

            thumb.classList.toggle(
                "active",
                i === currentGalleryIndex
            );

        });

    }


    /* ===== NEXT BUTTON ===== */

    if (galleryNext) {

        galleryNext.addEventListener("click", function () {

            showGalleryImage(
                currentGalleryIndex + 1
            );

        });

    }


    /* ===== PREVIOUS BUTTON ===== */

    if (galleryPrev) {

        galleryPrev.addEventListener("click", function () {

            showGalleryImage(
                currentGalleryIndex - 1
            );

        });

    }


    /* ===== THUMBNAIL CLICK ===== */

    galleryThumbs.forEach(function (thumb, index) {

        thumb.addEventListener("click", function () {

            showGalleryImage(index);

        });

    });


    /* =================================================
       GALLERY LIGHTBOX
       ================================================= */

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImg =
        document.getElementById("lightbox-img");

    const closeBtn =
        document.querySelector(".close");


    /* Main gallery image opens lightbox */

    if (galleryMainImage && lightbox && lightboxImg) {

        galleryMainImage.addEventListener("click", function () {

            lightbox.style.display = "flex";

            lightboxImg.src =
                galleryMainImage.src;

        });

    }


    /* Thumbnail opens lightbox */

    galleryThumbs.forEach(function (thumb) {

        thumb.addEventListener("dblclick", function () {

            if (!lightbox || !lightboxImg) return;

            lightbox.style.display = "flex";

            lightboxImg.src = thumb.src;

        });

    });


    /* Close button */

    if (closeBtn && lightbox) {

        closeBtn.addEventListener("click", function () {

            lightbox.style.display = "none";

        });

    }


    /* Click outside image closes lightbox */

    if (lightbox) {

        lightbox.addEventListener("click", function (e) {

            if (e.target === lightbox) {

                lightbox.style.display = "none";

            }

        });

    }

});
