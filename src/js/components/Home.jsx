import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Login } from "./login.jsx";
import { SignUp } from "./signup.jsx";
import { Prueba } from "./prueba.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h3>
				Login
			</h3>
			<Login />

			<hr />
			<h3>
				SignUp
			</h3>
			<SignUp/>


			<hr />

			<Prueba/>
		</div>
	);
};

export default Home;