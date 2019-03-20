import React from 'react';

export default ({ className, ...props }) => (
    <div className={className} {...props} />
)
