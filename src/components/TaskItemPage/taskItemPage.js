import React, { Fragment } from 'react';

import { Button } from '../Button'
import './taskItemPage.scss';

export const TaskItemPage = (props) => {

    return (
        <Fragment>
            <h1>"My company's promo text"</h1>
            <div className="task-details">
                <div className="task-details__content">
                    <div className="tesk-description">
                        Need to tranlate text : ...........
                    </div>
                </div>

                <div className="task-details__button-group">
                    <Button value="See tesk" />
                    <Button value="Download" />
                    <Button value="Add tranlate" />
                    <Button value="Attach" />
                </div>
            </div>
        </Fragment>
    )
}