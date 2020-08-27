import React from 'react';
import PropTypes from 'prop-types';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => (
  <div>
    <h3 className='text-dark'>{company}</h3>

    <p>
      <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
      {!to ? ' NOW' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
    </p>
    <p>
      <Strong>Position </Strong> {title}
    </p>
  </div>
);

ProfileExperience.PropTypes = {
  experience: PropTypes.array.isRequired,
};

export default ProfileExperience;
