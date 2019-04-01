import React, { Component } from 'react';

import { PromoSection } from '../Promo-section';
import { PricingSection } from '../Pricing-section';

import './page-content.css';

export class PageContent extends Component {
    handleClick = (e) => {
        console.log('clicked!', e.target)
    }

    onchangeInput = (e) => {
        console.log('typed!', this)
    }

    render() {
        const { plans, loginData } = this.props;

        return (
            <div className='page-content'>
                <PromoSection loginData={loginData} onchangeInput={this.onchangeInput} />
                <PricingSection plans={plans} handleClick={this.handleClick} />
            </div>
        )
    }
}