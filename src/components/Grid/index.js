import React from 'react';

export default ({ children, columns, className, ...props }) => {
    return (
        <div className={`ssc-l-grid`} {...props}>
            {children}
        </div>
    );
};
