import React, { Component } from 'react';
import DetailItem from '../detailItem';
import ListItem from '../listItem/listItem';
import styles from './list.module.css'

class List extends Component {
    
    render() {
        return (
            <React.Fragment>
                <section className={styles.content}>
                    <DetailItem />
                    <ul>
                        {this.props.items.map(item => (
                            <ListItem 
                            key={item.id}
                            title={item.snippet.title}
                            desc={item.snippet.description}
                            channelTitle={item.snippet.channelTitle}
                            thumnails={item.snippet.thumbnails}
                            /> 
                            ))}
                    </ul>
                </section>
            </React.Fragment>
        );
    }
}

export default List;