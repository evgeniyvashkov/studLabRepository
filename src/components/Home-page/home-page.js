import React, { Component, Fragment } from 'react';

import { PromoSection } from '../Promo-section';
import { PricingSection } from '../Pricing-section';
import { Slider } from '../Slider';

import { plans } from '../../infrostructure/tarif-pans';
import { loginData } from '../../infrostructure/login-form';

import './home-page.css';

export class HomePage extends Component {
    handleClick = (e) => {
        console.log('clicked!', e.target)
    }

    render() {
        // const { plans, loginData } = this.props;

        return (
            <Fragment>
                <PromoSection loginData={loginData} />
                <Slider />
                <PricingSection plans={plans} handleClick={this.handleClick} />
            </Fragment>
        )
    }
}