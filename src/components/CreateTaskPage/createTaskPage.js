import React, { Fragment, Component } from 'react';

import { HOST } from '../../constants';
import { Textarea } from '../Textarea';
import { Input } from '../Input';
import { Checkbox } from '../Checkbox';
import { CheckboxField } from '../CheckboxField';
import { Button } from '../Button';
import { UploadFile } from '../UploadFile'

import './createTaskPage.scss';

const checboxes = [
    {
        "id": "1",
        "theme": "medicine"
    },
    {
        "id": "2",
        "theme": "technology"
    },
    {
        "id": "3",
        "theme": "fantastic"
    },
    {
        "id": "4",
        "theme": "science"
    },
    {
        "id": "5",
        "theme": "biology"
    },
    {
        "id": "6",
        "theme": "article"
    },
    {
        "id": "7",
        "theme": "Informatic Technology"
    },
    {
        "id": "8",
        "theme": "fashion"
    },
    {
        "id": "9",
        "theme": "nature"
    },
    {
        "id": "10",
        "theme": "animals"
    }
]

export class CreateTaskPage extends Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <Fragment>
                <h1 className="page-content__title">Create Task</h1>
                <div className="new-task__details">
                    <form
                        action="#"
                        className="new-task__form"
                        method="POST"
                        encType="mumultipart/form-data"
                    >
                        <Textarea
                            label="Task Description:"
                            className="description"
                        />


                        <Textarea
                            label="Task Text:"
                            className="task-content"
                        />

                        <UploadFile
                            value="upload"
                            id="uploadTask"
                            label="txt/pdf/doc/docx, jpeg/png. max-size: 20mb."
                        />


                        <Input
                            label="Translate from:"
                        />

                        <Input
                            label="Translate to:"
                        />

                        <Checkbox id="review" value="review">
                            review from other translators
                        </Checkbox>

                        <Checkbox id="urgent" value="urgent">
                            urgent
                        </Checkbox>

                        <CheckboxField
                            label="Chose theme(oprional):"
                            chechboxes={checboxes}
                        />

                        <Button
                            value="Create"
                            className="button-green form__button" />
                    </form>
                </div>
            </Fragment>
        )
    }
} 