import React, {Fragment, useState} from "react"
import {FiTrash2, FiEdit2} from 'react-icons/fi';
import {NavLink} from "react-router-dom";
import {DeleteModal} from "./DeleteModal";
import {EditModal} from "./EditModal";

export const Item = ({item,index,setCurrent,deleteItemById,editItemById}) => {
    const [editModal,setEditModal] =useState(false)
    const [deleteModal,setDeleteModal] =useState(false)
    return(
        <Fragment>
            {editModal && <EditModal
                setEditModal={setEditModal}
                editItemById={editItemById}
                editItem={item}
                fetch={fetch}/>}
            {deleteModal && <DeleteModal
                setDeleteModal={setDeleteModal}
                deleteItemById={deleteItemById}
                id={item.id}
                fetch={fetch}/>}
        <tr className="item__row">
            <td className='item__index' onClick={() => {setCurrent(item)}}>
                <NavLink to={`/items/${index + 1}`}>
                    Задача №{index + 1}
                </NavLink>
            </td>
            <td className='item__description'>{item.title}</td>
            <td className="item__manipulation">
                <div className="item__details" onClick={() => {setEditModal(true)}}>
                    <FiEdit2/>
                </div>
                <div className="item__delete" onClick={() => {setDeleteModal(true)}}>
                    <FiTrash2/>
                </div>
            </td>
        </tr>
        </Fragment>


    )
}