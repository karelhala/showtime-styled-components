import React from 'react';
import './Card.scss';

export default ({ className, ...props }) => (
    <div className={`ssc-c-card ${className || ''}`} {...props} />
)
