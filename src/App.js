import React, { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container,Form,FormControl, Button, Navbar, Nav, Brand, Link } from "react-bootstrap";

import Article from "./Component/Articles/Article";
import bdArticulos from "./articulos.json";

function App() {

	const search = (e) => {
			console.log("=>", e.target.value)
		setword(e.target.value);
		};
	
	
		const [word, setword] = useState('');

	
	
	return (

		< > 
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    		<Navbar.Brand href="#home">Playeras & Más</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="#home">Inventario</Nav.Link>
					<Nav.Link href="#features">Tienda</Nav.Link>
					{/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
				</Nav>

				<Form inline >
					<FormControl type="text" placeholder="Búsqueda" className="mr-sm-2"
						onChange={search}
					/>
					<Button variant="dark">Buscar</Button>
				</Form>
			</Navbar>
		
			 	
 
		<Container>
			
			<Row>
 
				{	word!=''?
				
				bdArticulos
					.filter(el => el.Nombre.toLowerCase().includes(word.toLowerCase()))
					.map((el, i) => {
					return <Article key={i} item={el} />;
					})
				:
					bdArticulos
						.sort(function (a, b) {
							if ( a.Nombre < b.Nombre )
							return -1;
							if ( a.Nombre > b.Nombre )
								return 1;
							return 0;
							})
						.map((el, i) => {
					return <Article key={i} item={el} />;
				})}
			</Row>
		</Container>
			
		</>
	);
}

export default App;
