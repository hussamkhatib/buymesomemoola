/* eslint-disable no-console */
import React, { useState } from 'react';
import Avatar from '../private/Avatar';
import PopUp from '../PopUp';
import Celo from '../icons/Celo';
import { useUser } from '../../stores/user.store';
import Cancel from '../icons/Cancel';
/* eslint-disable react/prop-types */

function UserHead({ userDetails }) {
  const kit = useUser((state) => state.kit);
  const address = useUser((state) => state.address);
  const [popUp, setPopUp] = useState(false);
  const [donateCelo, setDonateCelo] = useState(0);

  async function transferMoola(e) {
    e.preventDefault();
    const goldtoken = await kit.contracts.getGoldToken();

    const oneGold = kit.web3.utils.toWei('1', 'ether');
    const tx = await goldtoken.transfer(userDetails.address, oneGold).send({
      from: address,
    });

    const hash = await tx.getHash();
    const receipt = await tx.waitReceipt();
    console.log({ hash, receipt });
    setPopUp(false);
  }

  const handleChange = (e) => {
    setDonateCelo(e.target.value);
  };

  return (
    <div className="bg-neutral-focus">
      <div className="flex max-w-6xl mx-auto w-full justify-between items-center">
        <div className="flex py-6 px-2">
          <Avatar bg="bg-neutral" letter={userDetails.name[0]} size={20} />
          <div className="pl-4">
            <h1 className="texl-2xl">
              {userDetails.name} is building buymesomemoola using next.js and
              celo
            </h1>
            <p>123 suporters</p>
          </div>
        </div>
        <div className="rounded">
          <button
            type="button"
            onClick={() => setPopUp(true)}
            className="btn mx-2"
          >
            Support
          </button>
        </div>
      </div>
      {popUp ? (
        <PopUp>
          <div className="flex justify-end py-2 px-4">
            <button
              className="text-neutral border-solid border-2 rounded-full"
              type="button"
              onClick={() => setPopUp(false)}
            >
              <Cancel />
            </button>
          </div>

          <form
            onSubmit={transferMoola}
            className="py-8 px-4 text-neutral text-center"
          >
            <p className="text-2xl">
              Buy <span className="font-semibold">{userDetails.name}</span> some
              m
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
                  onChange={handleChange}
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
      ) : null}
    </div>
  );
}

export default UserHead;
