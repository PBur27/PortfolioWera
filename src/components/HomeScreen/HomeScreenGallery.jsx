import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import GalleryImage from "./GalleryImage";
import styles from "./homeScreenGallery.module.css";

function HomeScreenGallery() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      speed: 2,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  return (
    <div className={`${styles.galleryContainer}`}>
      <div className={`${styles.embla__viewport}`} ref={emblaRef}>
        <div className={`${styles.embla__container}`}>
          <div className={`${styles.embla__slide} ${styles.galleryItem}`}>
            <GalleryImage imageNumber={1} />
          </div>
          <div className={`${styles.embla__slide} ${styles.galleryItem}`}>
            <GalleryImage imageNumber={2} />
          </div>
          <div className={`${styles.embla__slide} ${styles.galleryItem}`}>
            <GalleryImage imageNumber={3} />
          </div>
          <div className={`${styles.embla__slide} ${styles.galleryItem}`}>
            <GalleryImage imageNumber={5} />
          </div>
          <div className={`${styles.embla__slide} ${styles.galleryItem}`}>
            <GalleryImage imageNumber={1} />
          </div>
          <div className={`${styles.embla__slide} ${styles.galleryItem}`}>
            <GalleryImage imageNumber={2} />
          </div>
          <div className={`${styles.embla__slide} ${styles.galleryItem}`}>
            <GalleryImage imageNumber={3} />
          </div>
          <div className={`${styles.embla__slide} ${styles.galleryItem}`}>
            <GalleryImage imageNumber={5} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreenGallery;
