import React from 'react';

import { LoginForm } from '../LoginForm'
import { Tabbar } from '../Tabbar';
import { TabbarItem } from '../Tabbar__item';

import './promo-section.css';

export const PromoSection = () => (
    <div className='promo-section'>
        <h1 className='promo-section__text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto consequatur dolore
        </h1>
        <Tabbar>
            <TabbarItem label={`I'm customer`}>
                <LoginForm name='customer' />
            </TabbarItem>

            <TabbarItem label={`I'm employee`}>
                <LoginForm name='employee' />
            </TabbarItem>
        </Tabbar>
    </div>
)
