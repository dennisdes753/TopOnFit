import React from 'react';
import {Outlet} from 'react-router-dom';

import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";


function App() {
	return (
		<div className="App">
			<Outlet/>
		</div>
	);
}

export default App;
