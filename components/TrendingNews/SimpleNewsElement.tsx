import React from 'react';
import styles from '../../app/styles.module.css'; // Import your CSS module

const SimpleNewsElement = ({ imageUrl, username, date, title, summary }) => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="Post" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.infoText}>
          <p>{`${username} • ${date}`}</p>
        </div>
        <div className={styles.titleText}>
          <h2>{title}</h2>
        </div>
        <div className={styles.summaryText}>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleNewsElement;
  