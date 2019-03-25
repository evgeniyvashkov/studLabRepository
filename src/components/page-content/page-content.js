import React, { Component } from 'react';

import PromoSection from '../promo-section';
import PricingSection from '../pricing-section';
import './page-content.css';

export default class PageContent extends Component {
    render() {
        return (
            <div className='page-content'>
                <PromoSection />
                <PricingSection />
            </div>
        )
    }
}