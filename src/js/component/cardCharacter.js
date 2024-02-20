import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import star from "../../img/star001.jpeg"


export const CardCharacter = (props) => {
    const { store, actions } = useContext(Context)


    return (
        <div className="card col-sm-4 m-2 bg-secondary p-0" style={{ width: "18rem" }}>
            <img src={star} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title mb-4">{props.name}</h5>
                <Link to={"/people/" + props.id}>
                    <button type="button" className="btn btn-dark ms-0 border border-warning">Learn More</button>
                </Link>
                <button type="button" className="ms-5 btn btn-outline-warning"
                    onClick={() => actions.setFavorites({ type: 'Character', name: props.name })}>
                    <i className="far fa-heart"></i>
                </button>
            </div>
        </div>
    )
};