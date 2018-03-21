import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchResult from './SearchResult';
class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            serachvalue: 'papa',
            searchData: []
        }
    }

    updateSearch = e => {
        this.setState({
            serachvalue: e.target.value
        })
    }

    getDataset = () => {
        const apiUrl = `https://api.github.com/search/${this.props.userorrepo}?q=${this.state.serachvalue}`
        fetch(apiUrl)
            .then(result => result.json())
            .then(result => result.items)
            .then(items => this.setState({ searchData: items }));
    }
    render(){
        return (
            <div>
            <div className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" value={this.state.serachvalue} onChange={this.updateSearch} placeholder="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" onClick={()=>this.getDataset()} >Search</button>
            </div>
            <div>
                    <SearchResult result={this.state.searchData} />
            </div>
            </div >
                   )
    }


}

export default Search;
