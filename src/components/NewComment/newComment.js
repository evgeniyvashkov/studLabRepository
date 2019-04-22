import React, { PureComponent } from 'react'

import {Button} from '../Button'

export class NewComment extends PureComponent {
    state = {

    }

    render() {
        return (
            <div className="new-comment">
                <form action="#">
                    <div className="new-comment__wrapper">
                        <textarea className="new-comment__input-field"></textarea>
                    </div>
                    <Button type="submit" />
                </form>
            </div>
        )
    }
}
