import React, { Component, Fragment } from 'react';

import {HOST} from '../../constants';

import { PromoSection } from '../PromoSection';
import { PricingSection } from '../PricingSection';
import { Slider } from '../Slider';

import './homePage.scss';

export class HomePage extends Component {
    handleClick = (e) => {
        console.log('clicked!', e.target)
    }

    componentDidMount() {
        const { fetchTariffPlans } = this.props;
        fetchTariffPlans(`${HOST}/tariffs`);
    }

    render() {
        const { tariffPlansList } = this.props;

        return (
            <Fragment>
                <PromoSection />
                <Slider />
                <PricingSection plans={tariffPlansList} handleClick={this.handleClick} />
            </Fragment>
        )
    }
}