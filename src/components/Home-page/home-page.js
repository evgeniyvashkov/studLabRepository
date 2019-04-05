import React, { Component, Fragment } from 'react';

import { PromoSection } from '../Promo-section';
import { PricingSection } from '../Pricing-section';
import { Slider } from '../Slider';

import { plans } from '../../infrostructure/tarif-pans';

import './home-page.scss';

export class HomePage extends Component {
    handleClick = (e) => {
        console.log('clicked!', e.target)
    }

    render() {
        return (
            <Fragment>
                <PromoSection />
                <Slider />
                <PricingSection plans={plans} handleClick={this.handleClick} />
            </Fragment>
        )
    }
}