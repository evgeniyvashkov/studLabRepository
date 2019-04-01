import React from 'react';

import { Form } from '../Form'
import './promo-section.css';

export const PromoSection = (props) =>
    <div className='promo-section'>
        <h1 className='promo-section__text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto consequatur dolore
        </h1>
        <Form loginData={props.loginData} onchangeInput={props.onchangeInput} />
    </div>