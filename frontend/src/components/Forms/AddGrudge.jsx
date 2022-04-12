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
      <div className="flex justify-center flex-col center border-b p-3 mb-6 bg-[#FBFAFC]">
        <input
          type="text"
          value={name}
          placeholder="Who did it?"
          onChange={(e) => setName(e.target.value)}
          className=" outline-none text-lg bg-transparent  border-b"
        />
        <textarea
          rows="3"
          type="text"
          value={offense}
          placeholder="What happened?"
          onChange={(e) => setOffense(e.target.value)}
          className=" outline-none text-lg bg-transparent"
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
