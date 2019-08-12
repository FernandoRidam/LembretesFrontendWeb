import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import StickyForm from './pages/StickyForm';
import StickyList from './pages/StickyList';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ StickyList } />
      <Route path="/new" exact component={ StickyForm } />
    </BrowserRouter>
  );
};