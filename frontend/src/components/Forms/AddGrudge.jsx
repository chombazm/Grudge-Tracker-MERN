import React, { useState } from 'react';

function AddGrudge() {
  const [offense, setOffense] = useState('');
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center center flex-col mt-40"
    >
      <div className="flex justify-center center border-b p-3 mb-6 border-[#98A3B2] bg-[#FBFAFC]">
        <input
          type="text"
          value={offense}
          placeholder="what happened?"
          onChange={(e) => setOffense(e.target.value)}
          className="flex-auto w-64 outline-none text-lg bg-transparent"
        />
        <input
          type="text"
          value={name}
          placeholder="who did it?"
          onChange={(e) => setName(e.target.value)}
          className="flex-auto w-32 outline-none text-lg bg-transparent"
        />
      </div>

      <button
        className="mx-auto w-[200px] py-2 px-4 border border-transparent text-base font-medium text-white bg-[#FF8665] hover:bg-[#ef8163] focus:outline-none "
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default AddGrudge;
