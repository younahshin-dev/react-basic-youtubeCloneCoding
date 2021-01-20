import React, { Component } from 'react';
import ListItem from './listItem';

class List extends Component {
    
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <ListItem 
                        key={item.id.videoId === undefined ? item.id.channelId : item.id.videoId}
                        title={item.snippet.title}
                        desc={item.snippet.description}
                        channelTitle={item.snippet.channelTitle}
                        thumnails={item.snippet.thumbnails}
                    /> 
                ))}
            </ul>
        );
    }
}

export default List;