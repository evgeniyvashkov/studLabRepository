import React from 'react';

import { PricingSectionPlan } from '../PricingSectionPlan';

import './pricingSection.scss';

export const PricingSection = (props) => {
    const { plans, handleClick } = props;

    const planList = plans.map(plan => {
        return (
            <PricingSectionPlan key={plan.id} title={plan.title} activeUsers={plan.activeUsers} price={plan.price} handleClick={handleClick} />
        )
    })

    return (
        <section className="pricing-section">
            <h2 className="pricing-section__title">Pick the plan that's best for your business.</h2>
            <div className="pricing-section__content">
                {planList}
            </div>
        </section>
    )
}