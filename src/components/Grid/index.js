import React from 'react';
import './Grid.scss';

export default ({ children, columns, className, ...props }) => {
    return (
        <div className={`ssc-l-grid`} {...props}>
            {children}
        </div>
    );
};
