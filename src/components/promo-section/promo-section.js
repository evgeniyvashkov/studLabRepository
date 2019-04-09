import React from 'react';

import LoginFormContainer from '../../containers/login-form-container'
import { TabPanel } from '../Tab-panel';
import { TabPanelItem } from '../Tab__panel-item';

import './promo-section.css';

export const PromoSection = () => (
    <div className='promo-section'>
        <h1 className='promo-section__text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto consequatur dolore
        </h1>
        <TabPanel>
            <TabPanelItem label={`I'm customer`}>
                <LoginFormContainer name='customer' />
            </TabPanelItem>

            <TabPanelItem label={`I'm employee`}>
                <LoginFormContainer name='employee' />
            </TabPanelItem>
        </TabPanel>
    </div>
)
