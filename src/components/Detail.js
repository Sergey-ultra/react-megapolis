import React, {Fragment, useEffect} from 'react'
import {Preloader} from "./Preloader";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";


const Det = ({match, currentItem}) => {
    console.log(match)


    console.log(currentItem)

    return (
        !currentItem
            ? <Preloader/>
            : <header className="header">
                <div className="detail">
                    <div className="detail__title">Задача № {match.params.id}</div>
                    <div className="detail__text">Краткое описание</div>
                    <div className="detail__main">
                        {currentItem.title}
                    </div>
                    <NavLink to="/">
                        <button className="detail-btn">Вернуться в список</button>
                    </NavLink>
                </div>
            </header>
    )
}
const mapStateToProps = state => ({currentItem: state.items.currentItem})

export const Detail = connect(mapStateToProps)(Det)
