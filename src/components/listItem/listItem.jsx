import React from 'react';
import styles from './listItem.module.css';

const ListItem = ({ video, video: { snippet }, onClickVideo, display }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    <li
      className={`${displayType}`}
      onClick={() => onClickVideo(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.item_info}>
          <p className={styles.item__title}>{snippet.title}</p>
          <p className={styles.item__channeltitle}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};


export default ListItem;
