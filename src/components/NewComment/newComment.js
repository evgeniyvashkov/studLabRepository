import React, { PureComponent } from 'react'

import { Button } from '../Button'
import { Checkbox } from '../Checkbox'

export class NewComment extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            author: 'Eugene Vashkov'
        }
    }

    handleChange = (event) => {
        this.setState({message: event.target.value});
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
                        onClick={() => {
                            console.log(this.state, 'state')
                        }}

                    />
                </form>
            </div>
        )
    }
}
