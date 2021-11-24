/* eslint-disable no-underscore-dangle */
import React from 'react';
import CreatorsCard from './CreatorsCard';
/* eslint-disable react/prop-types */

function CreatorsList({ data }) {
  return (
    <div>
      <div className="max-w-5xl grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 mx-auto">
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
