import createHistory from 'history/createBrowserHistory'

const history = createHistory();
history.listen(location => {
  console.log('util history log', location);
});

export default history;