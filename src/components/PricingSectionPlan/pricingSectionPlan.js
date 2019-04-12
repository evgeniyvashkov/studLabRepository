import React from 'react';
import { Button } from '../Button';
import { showNotification } from '../PopUp/popUp';

import './pricingSectionPlan.scss';

export const PricingSectionPlan = (props) => {
    const { title, activeUsers, price, handleClick } = props;

    return (
        <div className={`pricing-section__plan ${title}`}>
            <div className="pricing-section__plan-title">
                {title}
            </div>
            <div className="pricing-section__plan-users">
                {activeUsers}
            </div>
            <div className="pricing-section__plan-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, similique.
                </div>
            <div className="pricing-section__plan-price">
                <div className="pricing-section__plan-currency">$</div>
                <div className="pricing-section__plan-cost">
                    {price}
                </div>
                <div className="pricing-section__plan-per-month">
                    <div>per</div>
                    <div>month</div>
                </div>
            </div>
            <Button className="pricing-section__button button-blue"
                onClick={showNotification}
                value="start"
            />
        </div>
    )
}