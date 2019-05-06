import React from 'react';

import './uploadFile.scss';

export const UploadFile = ({ label, value, id, ...attrs }) => {
    return (
        <div className="uploadFile-container">


            <label
                className="uploadFileButton"
                htmlFor={id}
            >{value}</label>

            <input
                className="uploadFileinput"
                type="file"
                id={id}
                {...attrs} />

            {label &&
                <span className="label">{label}</span>
            }
        </div>
    )
}