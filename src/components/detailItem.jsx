import React, { Component } from 'react';

class DetailItem extends Component {
    render() {
        return (
            <section className="detail__info">
                <video controls
                    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                    poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
                    width="620">
                </video>
                <h1>title</h1>
                <span>
                    description
                    어쩌구저쩌구아아아아아아
                    ㅇㄹㅇㄹㅇㄹ
                </span>
            </section>
        );
    }
}

export default DetailItem;