import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/Store";
import RootNavigator from "./src/navigations";
const App = (props) => {
		return (
			<Provider store={store}>
				<RootNavigator />
			</Provider>
		);
	
};

export default App;
