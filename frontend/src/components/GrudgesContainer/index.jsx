import React from 'react';
import Grudge from '../Grudge';

function GrudgesContainer() {
  const grudges = [
    {
      id: 1,
      name: 'Felix',
      forgiven: false,
      offense:
        'Refused to help me do the dishes after making an agreement. we danced ',
    },
    {
      id: 2,
      name: 'Bryan',
      forgiven: false,
      offense:
        'He used my hotspot without my concern and depleted my baundles.He ',
    },
  ];

  const handleDelete = (id) => {
    console.log(`Deleting grudge with id: ${id}`);
  };

  const handleToggle = (id) => {
    console.log(`Toggling grudge with id: ${id}`);
  };
  return (
    <div className="w-full max-w-[420px] mx-auto mt-8 flex justify-center flex-col">
      <h1>Grudges</h1>
      {grudges.map((grudge) => (
        <Grudge
          key={grudge.id}
          grudge={grudge}
          deleteGrudge={handleDelete}
          toggleGrudge={handleToggle}
        />
      ))}
      {/* <Grudge /> */}
    </div>
  );
}
export default GrudgesContainer;
