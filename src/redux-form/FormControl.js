import React from "react";


export const renderInput = ({
                                input,
                                placeholder,
                                type,
                                meta: { touched, error, warning }
                            }) => (
        <div className ={(touched && (error || warning))? "input__error" : " "}>
            <input {...input} placeholder={placeholder} type={type} />
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
)
