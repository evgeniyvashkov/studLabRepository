import React, { Component } from 'react';

import PricingSectionPlan from '../pricing-section__plan';


import './pricing-section.css';

export default class PricingSection extends Component {
    render() {
        return (
            <section className='pricing-section'>
                <h2 className='pricing-section__title'>Pick the plan that's best for your business.</h2>
                <div className='pricing-section__content'>
                    <PricingSectionPlan name='free' activeUsers={5} price={19.99} />
                    <PricingSectionPlan name='professional' activeUsers={15} price={49.99} />
                    <PricingSectionPlan name='business' activeUsers={100} price={99.99} />
                    <PricingSectionPlan name='business+' activeUsers='indefinitely' price={199.99} />
                </div>
            </section>
        )
    }
}