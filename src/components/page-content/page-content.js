import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { PromoSection } from '../Promo-section';
import { PricingSection } from '../Pricing-section';

import './page-content.css';

export class PageContent extends Component {
    handleClick = (e) => {
        console.log('clicked!', e.target)
    }

    render() {
        const { plans, loginData } = this.props;

        return (
            <div className='page-content'>
                <BrowserRouter>
                    <PromoSection loginData={loginData} />
                    <PricingSection plans={plans} handleClick={this.handleClick} />
                </BrowserRouter>
            </div >
        )
    }
}