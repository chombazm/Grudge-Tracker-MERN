import React from 'react';
import AddGrudge from './components/Forms/AddGrudge';
import GrudgesContainer from './components/GrudgesContainer';

function App() {
  return (
    <div className="w-full max-w-screen-md mx-auto p-4">
      <AddGrudge />

      <GrudgesContainer />
    </div>
  );
}

export default App;
