import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css'

class SearchBar extends React.Component{
    state = {
        value : ''
    }
    doSearch = (event)=>{
        this.setState({value: event.target.value})
        // console.log('dosearch first', event.target.value)
        event.persist()
        setTimeout(() => (
            this.props.callback(false , this.state.value)
        ), 500);
        
    }
    render() {
        return(
          <div className = 'rmdb-searchbar' >
              <div className = 'rmdb-searchbar-content'>
              <FontAwesomeIcon icon = {faSearch} className = 'rmdb-fa-search ' size = '2x'/>
              <input 
               type = "search" className='rmdb-searchbar-input' placeholder='Search' 
               onChange = {this.doSearch} 
                // value = {this.state.value}
              />
              </div>
          </div>
        )
    }


}
export default SearchBar;