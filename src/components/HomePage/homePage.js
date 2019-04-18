import React, { Component, Fragment } from 'react';

import { PromoSection } from '../PromoSection';
import { PricingSection } from '../PricingSection';
import { Slider } from '../Slider';

import './homePage.scss';

export class HomePage extends Component {
    handleClick = (e) => {
        console.log('clicked!', e.target)
    }

    componentDidMount() {
        this.props.fetchTarifPlans('http://localhost:3001/tariffs')
    }

    render() {
        const { tarifPlansList } = this.props;
        return (
            <Fragment>
                <PromoSection />
                <Slider />
                <PricingSection plans={tarifPlansList} handleClick={this.handleClick} />
            </Fragment>
        )
    }
}