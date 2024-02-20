import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/logo-star-wars.png"

export const Navbar = () => {
	const { store, actions } = useContext(Context);


	return (
		<nav className="navbar navbar-light bg-dark mb-3 p-0">
			<Link to="/">
				<img src={logo} style={{ width: "130px", height: "80px" }} className="m-3" />
			</Link>
			<div className="dropdown me-5">
				<button className="btn btn-dark border border-warning dropdown-toggle position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
					<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">{store.favorites.length}</span>
				</button>
				<ul className="dropdown-menu dropdown-menu-lg-end">
					{(store.favorites.length === 0) ?
						(<li className="m-2 text-secondary">Empty</li>) :
						store.favorites.map((item, id) => (
							<li key={id} className="d-flex p-1">
								<span className="dropdown-item">{item.type} - {item.name}</span>
								<button className="btn btn-danger" onClick={() => actions.setFavorites({ type: item.type, name: item.name })}>
									<i className="fa fa-trash"></i>
								</button>
							</li>
						))}
				</ul>
			</div>
		</nav>
	);
};