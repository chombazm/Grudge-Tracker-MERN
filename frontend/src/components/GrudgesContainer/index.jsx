import React from 'react';
import Grudge from '../Grudge';
import NoGrudges from './NoGrudges';

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
      forgiven: true,
      offense:
        'He used my hotspot without my concern and depleted my baundles.He ',
    },
    {
      id: 32342,
      name: 'Bryan',
      forgiven: true,
      offense:
        'He used my hotspot without my concern and depleted my baundles.He ',
    },
    {
      id: 2212,
      name: 'Bryan',
      forgiven: true,
      offense:
        'He used my hotspot without my concern and depleted my baundles.He ',
    },
    {
      id: 233,
      name: 'Bryan',
      forgiven: true,
      offense:
        'He used my hotspot without my concern and depleted my baundles.He ',
    },
    {
      id: 222,
      name: 'Bryan',
      forgiven: true,
      offense:
        'He used my hotspot without my concern and depleted my baundles.He ',
    },
    {
      id: 22,
      name: 'Bryan',
      forgiven: true,
      offense:
        'He used my hotspot without my concern and depleted my baundles.He ',
    },
  ];

  // const grudges = [];
  const isActiveTab = true;

  const handleDelete = (id) => {
    console.log(`Deleting grudge with id: ${id}`);
  };

  const handleToggle = (id) => {
    console.log(`Toggling grudge with id: ${id}`);
  };
  if (grudges.length === 0) {
    return <NoGrudges />;
  }
  return (
    <div className="w-full max-w-[420px] mx-auto mt-8 flex justify-center flex-col">
      <ul className="flex justify-center mb-4 place-items-center">
        <li
          className={`mx-2 ${
            isActiveTab
              ? 'text-black font-bold text-lg'
              : 'text-[#98A3B2] text-xs'
          }`}
        >
          All
        </li>
        <li className="mx-2 text-[#98A3B2] text-base cursor-pointer">
          Unforgiven
        </li>
        <li className="mx-2 text-[#98A3B2] text-base cursor-pointer">
          Forgiven
        </li>
      </ul>
      <div className="flex justify-between mb-8">
        <h3 className="text-sm font-bold">Grudges</h3>
        <h3 className="text-[#98A3B2] text-sm font-bold">{grudges.length}</h3>
      </div>
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
