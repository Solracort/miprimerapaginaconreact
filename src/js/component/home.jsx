import React from "react";
import Jumbotron from "./jumbotron.jsx"
import Navbar from "./navbar.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"
import Cuadrado from "../../img/cuadrado_vacio.png";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<Jumbotron/>
		<Card/>
		<Footer/>
		</>
		);
};

export default Home;
