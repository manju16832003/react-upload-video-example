import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import VideoUpload from './VideoUpload'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders upload form', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoUpload />, div);
});
