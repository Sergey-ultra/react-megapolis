import React, {Fragment} from 'react'
import {useHistory} from "react-router";


export const DeleteModal = ({setDeleteModal,deleteItemById, id}) => {
    const history = useHistory()

    return(
        <Fragment>
            <div className="modal__created-blur"></div>
            <div className="item__card">
                <div className="item__card-header">
                    <div className="item__card-title">Вы точно хотите удалить данный элемент?</div>
                    <div className="item__card-close" onClick={() => setDeleteModal(false)}></div>
                </div>
                <div className="delete__card">
                    <button className="delete-btn" onClick ={() => {
                        deleteItemById(id);
                        setDeleteModal(false)
                        history.replace('/')
                    }}>Удалить</button>
                </div>
            </div>
        </Fragment>
    )
}