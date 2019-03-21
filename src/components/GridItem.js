import React from 'react';

export default ({ children, columns, className, start, ...props }) => {
    const col = `ssc-l-grid__item--col-${columns || 1}`;
    const colStart = start ? `ssc-l-grid__item--col-start-${start}` : '';
    return (
        <div className={`ssc-l-grid__item ${col} ${colStart}`} {...props}>
            {children}
        </div>
    );
};
