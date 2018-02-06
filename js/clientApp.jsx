var MyFirstComponent = function() {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Just setting up my tooling before I get to Chillflix!')
  );
};
ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById('app')
);
