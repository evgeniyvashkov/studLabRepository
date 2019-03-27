import React, { Component } from 'react';
import Button from '../button';
import { showNotification } from '../pop-up/pop-up';

import './pricing-section__plan.css';


export default class PricingSectionPlan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            activeUsers: this.props.activeUsers,
            price: this.props.price
        }
    }

    render() {
        return (
            <div className={`pricing-section__plan ${this.state.name}`}>
                <div className='pricing-section__plan-title'>
                    {this.state.name}
                </div>
                <div className='pricing-section__plan-users'>
                    {this.state.activeUsers}
                </div>
                <div className='pricing-section__plan-description'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, similique.
                </div>
                <div className='pricing-section__plan-price'>
                    <div className='pricing-section__plan-currency'>$</div>
                    <div className='pricing-section__plan-cost'>
                        {this.state.price}
                    </div>
                    <div className='pricing-section__plan-per-month'>
                        <div>per</div>
                        <div>month</div>
                    </div>
                </div>
                <Button classList='pricing-section__button'
                        onClick = {showNotification}
                        value = 'start'
                />
            </div>
        )
    }
}