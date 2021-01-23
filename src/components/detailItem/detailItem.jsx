import React, { Component } from 'react';
import styles from './detailItem.module.css'
class DetailItem extends Component {
    render() {
        console.log(this.props.item);
        return (
            <section className="detail__info">
                <iframe id="player" type="text/html" width="640" height="360"
                    src={`http://www.youtube.com/embed/${this.props.item.id}`}
                    frameborder="0"
                    ></iframe>

                
                <h2>{this.props.item.snippet.title}</h2>
                <h2>{this.props.item.snippet.channelTitle}</h2>
                <pre>
                {this.props.item.snippet.description}
                </pre>
            </section>
        );
    }
}

export default DetailItem;