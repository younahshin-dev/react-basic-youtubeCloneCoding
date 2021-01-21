import React, { Component } from 'react';
import styles from './listItem.module.css';

class ListItem extends Component {
    render() {
        
        return (
            <li className={styles.items}>
                <img src={this.props.thumnails.default.url} alt="thumnails" />
                <div className={styles.item_info}>
                    <p className={styles.item__title}>{this.props.title}</p>
                    <p className={styles.item__channeltitle}>{this.props.channelTitle}</p>
                </div>
            </li>
        );
    }
}

export default ListItem;