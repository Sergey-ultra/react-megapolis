import React, {Fragment} from 'react'
import {Field, reduxForm} from "redux-form";
import {useHistory} from "react-router";

//импорт формы
import {lengthValid, required} from "../redux-form/validator";
import {renderInput} from "../redux-form/FormControl";


export const CreateModal = ({setCreateModal,createItem}) => {

    const history = useHistory()


    const Create = ({handleSubmit}) => {
        return(
            <form onSubmit ={handleSubmit}>
                <Field
                    name ="createItem"
                    validate ={[required,lengthValid]}
                    component = {renderInput}
                />
                <button className= "create-btn" type="submit">Создать</button>
            </form>
        )
    }
    const CreateForm = reduxForm({form: 'create'})(Create)

    //нажатие на кнопку отправки
    const send = values => {
        createItem(values.createItem);
        setCreateModal(false)
        history.replace('/')
    }

    return(
        <Fragment>
            <div className="modal__created-blur"></div>
            <div className="item__card">
                <div className="item__card-header">
                    <div className="item__card-title">Краткое описание</div>
                    <div className="item__card-close" onClick={() => setCreateModal(false)}>
                    </div>
                </div>
                <CreateForm onSubmit ={send}/>
            </div>
        </Fragment>
    )
}

