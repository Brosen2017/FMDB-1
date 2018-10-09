import React from "react";
import styles from "../styles/MovieImages.css";

const MovieImages = props => {
  return (
    <div className={styles.images}>
      <div className={styles.Poster}>
        <img src={props.movie.Poster}/>
      </div>
      <div className={styles.imageSpacer} />
      <div className={styles.secondImage}>
        <img src={props.movie.extra_images} />
      </div>
    </div>
  );
};

export default MovieImages;
