import React from 'react';

import { LoginForm } from '../LoginForm'
import { TabPanel } from '../TabPanel';
import { TabPanelItem } from '../TabPanelItem';

import './promoSection.scss';

export const PromoSection = () => (
    <div className='promo-section'>
        <h1 className='promo-section__text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto consequatur dolore
        </h1>
        <TabPanel>
            <TabPanelItem label={`I'm customer`}>
                <LoginForm name='customer' />
            </TabPanelItem>

            <TabPanelItem label={`I'm employee`}>
                <LoginForm name='employee' />
            </TabPanelItem>
        </TabPanel>
    </div>
)
