import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = (props) => {
  const [formData, setFormDate] = useState({
    company: '',
    website: ' ',
    location: ' ',
    status: ' ',
    skills: ' ',
    githubusername: ' ',
    bio: ' ',
    twitter: ' ',
    facebook: ' ',
    linkedin: ' ',
    youtube: ' ',
    instagram: '',
  });

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  return <div></div>;
};

CreateProfile.prototypes = {};

export default CreateProfile;
