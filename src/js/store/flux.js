const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			color: "red",
			user: "George"
		},
		actions: {
			changeUser: () => {
				if (getStore().user == "George") setStore({ color: "fuchsia", user: "Paola" });
				else if (getStore().user == "Paola") setStore({ color: "orange", user: "Matthew" });
				else setStore({ color: "red", user: "George" });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
