import React, { PureComponent } from 'react'

import { Button } from '../Button'
import { Checkbox } from '../Checkbox'

export class NewComment extends PureComponent {
    state = {

    }

    render() {
        const { onAddComment } = this.props;
        return (
            <div className="new-comment">
                <form action="#">
                    <div className="new-comment__wrapper">
                        <textarea className="new-comment__input-field"></textarea>
                    </div>
                    <Checkbox id="to-admin">
                        Send to administranor to
                    </Checkbox>
                    <Button
                        type="submit"
                        className="button-green"
                        value="add comment"
                        onClick={() => onAddComment()}
                    />
                </form>
            </div>
        )
    }
}
