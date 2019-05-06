import React, { PureComponent } from 'react'

import { Button } from '../Button'
import { Checkbox } from '../Checkbox'

export class NewComment extends PureComponent {
    state = {
        message: '',
    }

    handleChange = (event) => {
        this.setState({ message: event.target.value });
    }

    handeleAddcomment = (event) => {
        event.preventDefault()
        if (this.state.message) {
            this.props.sendComment(this.state.message);
            this.setState({ message: '' })
        }
    }

    render() {
        return (
            <div className="new-comment">
                <form action="#">
                    <div className="new-comment__wrapper">
                        <textarea
                            className="new-comment__input-field"
                            value={this.state.message}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                    <Checkbox id="to-admin">
                        Send to administranor to
                    </Checkbox>
                    <Button
                        type="submit"
                        className="button-green"
                        value="add comment"
                        onClick={this.handeleAddcomment}
                    />
                </form>
            </div>
        )
    }
}
