import React from 'react';

export default ({ className, ...props }) => (
    <div className={`ssc-c-card ${className || ''}`} {...props} />
)
