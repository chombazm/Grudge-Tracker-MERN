import React from 'react';
import PropTypes from 'prop-types';

function Grudge({ grudge, deleteGrudge, toggleGrudge }) {
  return (
    <div
      className="flex w-full border border-[#FBFAFC] rounded-[20px] p-2 bg-[#FBFAFC] mb-8 justify-center items-center"
      onClick={toggleGrudge}
      aria-hidden="true"
    >
      <div className="flex-none w-[74px] border-8 flex justify-center content-center border-[#FDE9B4] bg-white rounded-full h-[74px] ">
        <span className="text-[#FCF4E4] text-[2.3rem] font-bold">
          {grudge.name[0]}
        </span>
      </div>
      <div className="flex-auto px-2">
        <div className="">
          <h2 className="text-lg font-bold">{grudge.name}</h2>
          <p className="text-sm text-[#98A3B2]">{grudge.offense}</p>
          <div className="flex justify-between">
            <span className="text-xs text-[#C4CEDC]">
              {grudge.forgiven ? 'Forgiven' : 'Not forgiven'}
            </span>
            <span className="text-xs text-[#C4CEDC]">
              Grudged on
              {grudge.offense.length}
            </span>
          </div>
        </div>
      </div>
      <div className="flex-none w-[34px] h-[34px] rounded-full border-4 border-[#61AF65] " />
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
  deleteGrudge: PropTypes.func.isRequired,
  toggleGrudge: PropTypes.func.isRequired,
};

export default Grudge;
