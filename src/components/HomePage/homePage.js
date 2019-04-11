import React, { Component, Fragment } from 'react';

import { PromoSection } from '../PromoSection';
import { PricingSection } from '../PricingSection';
import { Slider } from '../Slider';

import { plans } from '../../infrostructure/tarifPlans';

import './homePage.scss';

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