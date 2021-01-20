import React, { Component } from 'react';

class Header extends Component {

    inputRef = React.createRef();
    handleSearch = () => {
        this.props.onSearch(this.inputRef.current.value);
    };

    render() {
        return (
            <header>
                <section className="header__logo">
                    <button><i className="fab fa-youtube"></i></button>
                    <span>Youtube</span>
                </section>
                <input ref={this.inputRef} type="text" className="searchInput" placeholder="Search..."/>
                <button onClick={this.handleSearch}><i className="fas fa-search"></i></button>
            </header>
        );
    }
}

export default Header;