import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
  <div>
    <h3 className="text-dark">{school}</h3>
    <p>
      <Moment format="YYYY/MM/DD">{moment.utc(from)}</Moment> -{' '}
      {!to ? ' Now' : <Moment format="YYYY/MM/DD">{moment.utc(to)}</Moment>}
    </p>
    <p>
      <strong>Degree: </strong> {degree}
    </p>
    <p>
      <strong>Field Of Study: </strong> {fieldofstudy}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;





// import React, { Strong } from 'react';
// import Moment from 'react-moment';
// import PropTypes from 'prop-types';
//
// const ProfileEducation = ({
//   education: { school, degree, fieldofStudy, current, to, from, description },
// }) => (
//   <div>
//     <h3 className='text-dark'>{school}</h3>
//
//     <p>
//       <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
//       {!to ? ' NOW' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
//     </p>
//     <p>
//       <Strong>Degree </Strong> {degree}
//     </p>
//     <p>
//       <Strong>Field of Study </Strong> {fieldofStudy}
//     </p>
//     <p>
//       <Strong>Description: </Strong> {description}
//     </p>
//   </div>
// );
//
// ProfileEducation.propTypes = {
//   education: PropTypes.array.isRequired,
// };
//
// export default ProfileEducation;
