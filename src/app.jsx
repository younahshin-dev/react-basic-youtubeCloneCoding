
import './app.css';
import React, { Component } from 'react';
import List from './components/list';
import Header from './components/header';
import { properties } from './properties.js';
class App extends Component {

  state = {
      isFetching: false,
      listItem: []
  };
  
  handleSearch = (searchText) => {
    console.log("진입");
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${properties.apiKey}`; 
    url += `&q=${searchText}`;
    
    fetch(url, {
      method: "GET",
      redirect: 'follow'
    })
    .then((resp) => {
      console.log(resp);
      return resp.json()
    }) 
    .then((data) => {
      this.setState({ suggestion: data.suggestion })                    
    })
    .catch((error) => {
      console.log(error, "catch the hoop")
    })

  };

  componentDidMount() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${properties.apiKey}&part=snippet&maxResults=24&q=이연`, requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({...this.state, listItem:result.items});
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <React.Fragment>
        <Header onSearch={this.handleSearch}/>
        <List items={this.state.listItem} />
      </React.Fragment>
        
    );

  }
}

export default App;
