import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        
        return (
            <li className="item">
                <img src={this.props.thumnails.default.url} alt="thumnails" />
                <section className="item_info">
                    <span className="item__title">{this.props.title}</span>
                    <span className="item__channeltitle">{this.props.channelTitle}</span>
                </section>
            </li>
        );
    }
}

export default ListItem;