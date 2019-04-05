import React from 'react';

import './tab-panel__item.css';

export const TabPanelItem = ({ children, label, activeTab }) => {
    const classList = 'tab__panel-item ' + (activeTab === label ? 'active' : '');

    return (
        <div className={classList}>
            {children}
        </div>
    )
}