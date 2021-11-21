/* eslint-disable react/prop-types */
import React from 'react';
import Cancel from '../icons/Cancel';
import Celo from '../icons/Celo';
import PopUp from '../PopUp';

function SupportCeloModal({
  closeSupportModal,
  transferMoola,
  name,
  donateCelo,
  handleCeloChange,
}) {
  return (
    <PopUp>
      <div className="flex justify-end py-2 px-4">
        <button
          className="text-neutral border-solid border-2 rounded-full"
          type="button"
          onClick={() => closeSupportModal()}
        >
          <Cancel />
        </button>
      </div>

      <form onSubmit={transferMoola} className="p-4 text-neutral text-center">
        <p className="text-2xl">
          Buy <span className="font-semibold">{name} </span> some m
          <span>
            <Celo size={24} />
            la
          </span>
        </p>
        <div className="flex my-4 bg-gray-100 rounded">
          <div className="p-4 flex">
            <Celo size={48} />
            <span className="ml-3 items-center">x</span>
          </div>

          <div className="form-control p-4 w-full">
            <input
              type="number"
              min={0}
              max={5000}
              onChange={handleCeloChange}
              value={donateCelo}
              className="input input-bordered"
            />
          </div>
        </div>
        <button type="submit" className="btn w-full rounded-full mt-4">
          support
        </button>
      </form>
    </PopUp>
  );
}

export default SupportCeloModal;
