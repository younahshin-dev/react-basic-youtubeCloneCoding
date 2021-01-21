import React, { Component } from 'react';
import styles from './header.module.css';

class Header extends Component {

    inputRef = React.createRef();
    handleSearch = () => {
        this.props.onSearch(this.inputRef.current.value);
    };

    handleKeyPress = (event) => {
        if (event.code === "Enter") {
            this.props.onSearch(this.inputRef.current.value);
        }

    }

    render() {
        return (
            <header>
                <section className={styles.logo}>
                    <img className={styles.logo_img} src='../images/logo.png' />
                    <span>Youtube</span>
                </section>
                <input ref={this.inputRef} onKeyPress={this.handleKeyPress} type="text" className={styles.searchInput} placeholder="Search..."/>
                <button onClick={this.handleSearch} className={styles.btnSearch}><img src='../images/search.png' /></button>
            </header>
        );
    }
}

export default Header;