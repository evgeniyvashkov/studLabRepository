import React from 'react';

import './tabbar__navigation.css';

export const TabbarNavigation = ({ navLabel, onChangeActiveTab, className }) => (
    <div
        className={`tabbar__navigation-item ${className}`}
        onClick={() => onChangeActiveTab(navLabel)}
    >
        {navLabel}
    </div>
)

