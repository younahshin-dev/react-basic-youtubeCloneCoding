import React, { Component } from 'react';

import ListItem from '../listItem/listItem';
import styles from './list.module.css'

class List extends Component {
    handleClickVideo = (item) => {
        this.props.handleClickVideo(item);
    };

    render() {
        return (
            <React.Fragment>
                <section className={styles.content}>
                    
                    <ul>
                        {this.props.items.map(item => (
                            <ListItem 
                            key={item.id}
                            video={item}
                            title={item.snippet.title}
                            desc={item.snippet.description}
                            channelTitle={item.snippet.channelTitle}
                            thumnails={item.snippet.thumbnails}
                            onClickVideo={this.handleClickVideo}
                            display={this.props.display}
                            /> 
                            ))}
                    </ul>
                </section>
            </React.Fragment>
        );
    }
}

export default List;