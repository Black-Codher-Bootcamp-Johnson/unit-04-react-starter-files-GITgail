import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

function App() {
  return (
      <Profile name="GAIL" bio="I am a junior developer" location="Manchester"/>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

