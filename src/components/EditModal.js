import React, {Fragment, useState} from 'react'
import {useHistory} from "react-router";
import {Field, reduxForm} from "redux-form";
import {lengthValid, required} from "../redux-form/validator";
import {renderInput} from "../redux-form/FormControl";


export const EditModal = ({editItem,setEditModal,editItemById,fetch}) => {

    const history = useHistory()

    const Edit = ({handleSubmit}) => {
        return(
            <form onSubmit ={handleSubmit}>
                <Field
                    className="edit__input"
                    name ="item"
                    validate ={[required,lengthValid]}
                    component = {renderInput}
                />
                <button className= "create-btn" type="submit">Редактировать</button>
            </form>
        )
    }
    const EditForm = reduxForm({form: 'edit',initialValues: {item: editItem.title}})(Edit)

    //нажатие на кнопку отправки
    const send = values => {
        console.log(values.item)
        editItemById(editItem.id,values.item);
        setEditModal(false)
        history.replace('/')
    }


    return(
        <Fragment>
            <div className="modal__created-blur"></div>
            <div className="item__card">
                    <div className="item__card-header">
                        <div className="item__card-title">Редактирование задания</div>
                        <div className="item__card-close" onClick={() => setEditModal(false)}></div>
                    </div>
                <EditForm onSubmit={send}/>
            </div>
        </Fragment>
    )
}