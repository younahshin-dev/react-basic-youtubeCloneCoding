
import React, { useEffect, useState } from 'react';
import List from './components/list/list';
import Header from './components/header/header';
import styles from './app.module.css';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube.searchList(query)
    .then(items => {
      setVideos(items);
    });
  }

  useEffect(() => {
    youtube.mostPopular().then(items => {
     setVideos(items);
    });

  }, []);
    
  return (
    <React.Fragment>
      <div className={styles.app}>
        <Header onSearch={search}/>
        <List items={videos} />
      </div>
    </React.Fragment>
      
  );

  
}

export default App;
