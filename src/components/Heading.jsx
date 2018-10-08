import React from "react";
import styles from "../styles/Heading.css";

const Heading = props => {
  return (
    <div className={styles.mainTileHeading}>
      <div>
        <button className={styles.ribbon}>
          <img
            className={styles.ribbonImg}
            src="http://www.jmkxyy.com/plus-sign-icon/plus-sign-icon-19.jpg"
          />
        </button>
      </div>
      <div className={styles.titleAndDetails}>
        <div className={styles.Title}>
          {props.movie.Title}
          <span className={styles.releaseYear}>
          
            {" ("}
            {props.movie.release_date.slice(11, 15)})
          </span>
        </div>
        <div className={styles.detailsLine}>
          <a className={styles.detailsColor}> {props.movie.movie_rating}</a>
          <a className={styles.spacer}>{"|"}</a>
          <a className={styles.detailsColor}>{props.movie.movie_length}</a>
          <a className={styles.spacer}>{"|"}</a>
          <a className={styles.detailsColor}>{props.movie.movie_genre}</a>
          <a className={styles.spacer}>{"|"}</a>
          <a className={styles.detailsColor}>{props.movie.release_date}</a>
        </div>
      </div>
      <div className={styles.ratingBox}>
        <a className={styles.starIcon}>
          <img
            className={styles.starImg}
            src="https://www.photospng.com/uploads/plain-clipart-yellow-star-download.png"
          />
        </a>
        <div className={styles.reviewCounts}>
          <a className={styles.review_average}>
            {props.movie.review_average}
            <span className={styles.outOfTen}>/10</span>
          </a>
          <a href="" className={styles.totalReviews}>
            {props.movie.reviews_number}
          </a>
        </div>

        <a className={styles.reviewSpacer} />
        <a className={styles.rateThis}>
          <span>
            {/* should be clickable with pop up stars to rate */}
            <img
              className={styles.rateThisStar}
              src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699009-icon-23-star-512.png"
            />
          </span>
          {/* should have same hyperlink as star that prompts vote */}
          <span className={styles.rateThisText}>
            <span>Rate</span>
            <span>This</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Heading;
