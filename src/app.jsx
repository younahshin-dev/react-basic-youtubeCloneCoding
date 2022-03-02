
import React, { useEffect, useState } from 'react';
import List from './components/list/list';
import Header from './components/header/header';
import styles from './app.module.css';
import DetailItem from './components/detailItem/detailItem';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedItem, setDetail] = useState(null);
  
  const search = query => {
    youtube.searchList(query)
    .then(items => {
      setDetail(null);
      setVideos(items);
    });
  }

  useEffect(() => {
    youtube.mostPopular().then(items => {
     setVideos(items);
    });

  }, [youtube]);
    
  const onClickVideo = (video) => {
    setDetail(video);
  }

  return (
    <React.Fragment>
      <div className={styles.app}>
        <Header onSearch={search}/>
        <section className={styles.content}>
        {selectedItem && (
          <div className={styles.detail}>
            <DetailItem item={selectedItem}/>
          </div>
          )}
          <div className={styles.list}>
            <List items={videos} handleClickVideo={onClickVideo} display={selectedItem ? 'list' : 'grid'} />
          </div>
        </section>
      </div>
    </React.Fragment>
      
  );

  
}

export default App;
