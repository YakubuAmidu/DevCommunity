import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

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
    <p>
      <Strong>Description: </Strong> {description}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default ProfileExperience;
