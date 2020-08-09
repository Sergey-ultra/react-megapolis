import React, {Fragment, useCallback, useEffect, useState} from 'react'
import {Item} from "./Item";
import {useApi} from '../api/api'
import {Preloader} from "./Preloader";
import {connect} from "react-redux";
import {fetchItems, setCurrent} from "../redux/item-reducer";
import {CreateModal} from "./CreateModal";


const List = ({items, fetchItems, setCurrent}) => {

    const [createModal, setCreateModal] = useState(false)

    const {loading, api} = useApi()

    const fetch = useCallback(async () => {
        try {
            const fetched = await api('https://test.megapolis-it.ru/api/list', 'GET')
            console.log(fetched.data)
            fetchItems(fetched.data)
        } catch (e) {
        }
    }, [api])

    const createItem = useCallback(async (item) => {
        try {
            await api('https://test.megapolis-it.ru/api/list', 'POST', {title: item})
            const fetched = await api('https://test.megapolis-it.ru/api/list', 'GET')
            fetchItems(fetched.data)
        } catch (e) {
        }
    }, [api])

    const editItemById = useCallback(async (id, item) => {
        try {
            await api(`https://test.megapolis-it.ru/api/list/${id}`, 'POST', {id, title: item})
            const fetched = await api('https://test.megapolis-it.ru/api/list', 'GET')
            fetchItems(fetched.data)
        } catch (e) {
        }
    }, [api])

    const deleteItemById = useCallback(async (id) => {
        try {
            await api(`https://test.megapolis-it.ru/api/list/${id}`, 'DELETE')
            const fetched = await api('https://test.megapolis-it.ru/api/list', 'GET')
            fetchItems(fetched.data)
        } catch (e) {
        }
    }, [api])


    useEffect(() => {
        fetch()
    }, [fetch, createItem])

    return (
        loading
            ? <Preloader/>
            : <Fragment>
                <div className="header__wrapper">
                    {createModal && <CreateModal setCreateModal={setCreateModal} createItem={createItem} fetch={fetch}/>}
                    <div className='header__title'>Список</div>
                    <button className="header__button" onClick={() => setCreateModal(true)}>Добавить</button>
                </div>

                <section className="item">
                    <table>
                        {items.map((item, index) => {
                            return <Item key={index}
                                         item={item}
                                         index={index}
                                         setCurrent={setCurrent}
                                         editItemById={editItemById}
                                         deleteItemById={deleteItemById}
                                         fetch={fetch}
                            />
                        })}
                    </table>
                </section>
            </Fragment>
    )
}
const mapStateToProps = state => ({
    items: state.items.items
});


export const ListContainer = connect(mapStateToProps, {fetchItems, setCurrent})(List);


