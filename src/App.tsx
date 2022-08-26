import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Untitled</h1>
        <Routes>
          <Route path={`/`} element={<Page1 />} />
          <Route path={`/page2`} element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export function Page1() {
  return <h2>Page1</h2>;
}

export function Page2() {
  return <h2>Page2</h2>;
}

export default App;
