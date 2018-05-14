import React, { Component } from 'react';
import ItemList from '../components/ItemList/ItemList'
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    image: state.image,
    color: state.color,
    desc: state.desc
});

//setState
const mapDispatchToProps = (dispatch) => ({
    //fetch해서 데이터 가져오기
    
    fetchItem: () => dispatch(actions.setItem())
    
});

class ItemListContainer extends Component {
    render () {
        this.props.fetchItem()
        console.log(this.props);
        
        console.log(this.props.image);  
        return (
            <ItemList 
            image={this.props.image}
            color={this.props.color}
            desc={this.props.desc}
            />
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemListContainer);;
