import React from 'react';

import { Form } from '../Form'
import { Tabbar } from '../Tabbar';
import { TabbarItem } from '../Tabbar__item';

import './promo-section.css';

export const PromoSection = ({ loginData: { customer: customerData, employee: employeeData } }) => (
    <div className='promo-section'>
        <h1 className='promo-section__text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto consequatur dolore
        </h1>
        <Tabbar>
            <TabbarItem label={`I'm customer`}>
                <Form loginData={customerData} />
            </TabbarItem>

            <TabbarItem label={`I'm employee`}>
                <Form loginData={employeeData} />
            </TabbarItem>
        </Tabbar>
    </div>
)
