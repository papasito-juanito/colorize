import React, { Component } from 'react';
import Items from './Items'
import Sort from './Sort'
import axios from 'axios';


class ItemList extends Component {
    constructor(props){
        super()
        this.state = {
            item: []
        }
    }
    
    componentDidMount(){
        axios.get(`http://127.0.0.1:8080/api/item/list?color_id=[${this.props.match.params.id.split('&')}]`)
        .then((response) => {
            console.log(response);
            console.log('파람', this.props.match.params.id.split('&'));
            
            this.setState({item: response.data})
          })
    }    
  
    render(){
        return (
            <div>
            <Sort />
            <Items item={this.state.item}/>
            </div>
        )
    }    
};

export default ItemList;