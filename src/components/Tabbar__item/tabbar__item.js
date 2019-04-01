import React from 'react';

import './tabbar__item.css';

export const TabbarItem = ({ children, label, activeTab }) => {
    const classList = 'tabbar__item ' + (activeTab === label ? 'active' : '');

    return (
        <div className={classList}>
            {children}
        </div>
    )
}