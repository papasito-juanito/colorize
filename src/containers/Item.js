// Global import
import React from 'react';
import { Link, Route } from 'react-router-dom';

// Local import
import Header from '../components/Header';
import { Color } from 'containers'; 

const Item = ({match}) => {
  return (
    <div>
      <Header/>
      <h2>아이템 상세정보 및 리뷰</h2>
      <ul>
        <li><Link to={`${match.url}/1`}>Post #1</Link></li>
        <li><Link to={`${match.url}/2`}>Post #2</Link></li>
        <li><Link to={`${match.url}/3`}>Post #3</Link></li>
        <li><Link to={`${match.url}/4`}>Post #4</Link></li>
      </ul>
      <Route exact path={match.url} render={()=>(<h3>Please select any Color</h3>)}/>
      <Route path={`${match.url}/:id`} component={Color}/>
    </div>
  );
};

export default Item;
