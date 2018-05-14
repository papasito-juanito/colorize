// Global import
import React from 'react';

// Local import
import Header from '../components/Header';

const Color = ({match}) => {
  return (
    <div>
      <Header/>
      <h2>
        색깔 나래비 {match.params.id}
      </h2>
    </div>
  );
};

export default Color;
