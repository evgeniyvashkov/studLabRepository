import React from 'react';

import './tabPanelItem.scss';

export const TabPanelItem = ({ children, label, activeTab }) => {
    const classList = 'tab__panel-item ' + (activeTab === label ? 'active' : '');

    return (
        <div className={classList}>
            {children}
        </div>
    )
}