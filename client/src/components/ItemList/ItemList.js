import React, { Component } from 'react';
import Items from './Items'
import Sort from './Sort'
import axios from 'axios';
import { url } from '../../config';

class ItemList extends Component {
    constructor(props){
        super()
        this.state = {
            item: []
        }
    }
    
    componentDidMount(){
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]`)
        .then((response) => {
            // this.setState({item: response.data.result})
            console.log(response)
          })
    }    
  
    render(){
        return (
            <div>
            <Items item={this.state.item}/>
            </div>
        )
    }    
};

export default ItemList;