import React from 'react';
import PropTypes from 'prop-types';

function Grudge({ grudge, toggleGrudge }) {
  return (
    <div
      className="flex w-full border border-[#FBFAFC] rounded-[20px] p-2 bg-[#FBFAFC] mb-8 justify-center items-center"
      aria-hidden="true"
    >
      <div
        className={`flex-none w-[74px] border-8 flex justify-center content-center ${
          grudge.forgiven ? 'border-[#61AF65]' : 'border-[#FF8665]'
        } bg-white rounded-full h-[74px]`}
      >
        <span className="text-[#FCF4E4] text-[2.3rem] font-bold">
          {grudge.name[0]}
        </span>
      </div>
      <div className="flex-auto px-2">
        <div className="">
          <h2 className="text-sm font-bold">{grudge.name}</h2>
          <p className="text-xs text-[#98A3B2]">{grudge.offense}</p>
          <div className="flex justify-between">
            <div className="flex place-items-center">
              <span
                className={`w-[10px] rounded-full ${
                  grudge.forgiven ? 'bg-[#61AF65]' : 'bg-[#FF8665]'
                } h-[10px] `}
              />
              <span className="text-xs text-[#C4CEDC] ml-2">
                {grudge.forgiven ? 'Forgiven' : 'Not forgiven'}
              </span>
            </div>
            <span className="text-xs text-[#C4CEDC]">
              Grudged on
              {grudge.offense.length}
            </span>
          </div>
        </div>
      </div>
      <div className="flex-none w-[34px] h-[34px] rounded-full bg-white ">
        <button
          className="w-full h-full bg-transparent text-red"
          onClick={() => toggleGrudge(grudge.id)}
          type="button"
        >
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

Grudge.propTypes = {
  grudge: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    forgiven: PropTypes.bool.isRequired,
    offense: PropTypes.string.isRequired,
  }).isRequired,
  toggleGrudge: PropTypes.func.isRequired,
};

export default Grudge;
