// Global import
import React from 'react';
import queryString from 'query-string';

// Local import
import Header from '../components/Header';

const Login = ({location, match}) => {
  const query = queryString.parse(location.search);

  const detail = query.detail === 'true';

  return (
    <div>
      <Header/>
      <h2>로그인 {match.params.id}</h2>
      {detail && 'detail: blahblah'}
    </div>
  );
};

export default Login;
