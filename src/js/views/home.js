import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Color Demonstrator</h1>
			<p>
				<div className="colorBox" style={{ background: store.color }}>
					<h2 style={{ margin: "40% auto" }}>{store.user}</h2>
				</div>
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};
