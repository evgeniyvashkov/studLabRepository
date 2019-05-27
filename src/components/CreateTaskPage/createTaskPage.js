import React, { Fragment, Component } from "react";

import { HOST, HEADERS } from "../../constants";
import { Textarea } from "../Textarea";
import { Input } from "../Input";
import { Checkbox } from "../Checkbox";
import { CheckboxField } from "../CheckboxField";
import { Button } from "../Button";
import { UploadFile } from "../UploadFile";

import "./createTaskPage.scss";

export class CreateTaskPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskTitle: "",
      taskContent: "",
      translateFrom: "",
      translateTo: ""
    };
  }

  componentDidMount() {
    const { fetchTransleteThemes } = this.props;
    fetchTransleteThemes(`${HOST}/checkboxThemesField`);
  }

  hendleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  onSubmitForm = event => {
    event.preventDefault();

    fetch(`${HOST}/tasks`, {
      headers: HEADERS,
      method: "POST",
      body: JSON.stringify({
        taskId: Date.now(),
        title: this.state.taskTitle,
        text: this.state.taskContent,
        dueDate: new Date().toLocaleDateString(),
        status: "open"
      })
    });

    this.setState({
      taskTitle: "",
      taskContent: "",
      translateFrom: "",
      translateTo: ""
    });
  };

  render() {
    const { themeList } = this.props;

    return (
      <Fragment>
        <h1 className="page-content__title">Create Task</h1>
        <div className="new-task__details">
          <form
            action="#"
            className="new-task__form"
            method="POST"
            encType="mumultipart/form-data"
            onSubmit={this.onSubmitForm}
          >
            <Textarea
              name="taskTitle"
              label="Task Title:"
              className="task-title"
              value={this.state.taskTitle}
              onChange={this.hendleInputChange}
            />

            <Textarea
              name="taskContent"
              label="Task Text:"
              className="task-content"
              value={this.state.taskContent}
              onChange={this.hendleInputChange}
            />

            <UploadFile
              value="upload"
              id="uploadTask"
              label="txt/pdf/doc/docx, jpeg/png. max-size: 20mb."
            />

            <Input
              label="Translate from:"
              onChange={this.hendleInputChange}
              name="translateFrom"
              value={this.state.translateFrom}
            />

            <Input
              label="Translate to:"
              onChange={this.hendleInputChange}
              name="translateTo"
              value={this.state.translateTo}
            />

            <Checkbox id="review" value="review">
              review from other translators
            </Checkbox>

            <Checkbox id="urgent" value="urgent">
              urgent
            </Checkbox>

            <CheckboxField
              label="Chose theme(oprional):"
              chechboxes={themeList}
            />

            <Button value="Create" className="button-green form__button" />
          </form>
        </div>
      </Fragment>
    );
  }
}
