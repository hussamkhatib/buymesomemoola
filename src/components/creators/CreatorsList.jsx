/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import CreatorsCard from './CreatorsCard';
import { capitizeFirstLetter } from '../../util/helper';

function CreatorsList({ data, type }) {
  const heading = capitizeFirstLetter(type);
  return (
    <div className="py-8">
      <h3 className="text-3xl pb-5">{heading}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 ">
        {data.map((user) => (
          <CreatorsCard
            key={user._id}
            name={user.userDetails.name}
            description={user.userDetails.bio}
            picture={user.userDetails.avatar}
            supporters={user.followers}
          />
        ))}
      </div>
    </div>
  );
}

export default CreatorsList;
