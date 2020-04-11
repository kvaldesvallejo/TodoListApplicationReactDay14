import React, { useState } from "react";

export const List = () => {
	{
		/* in the hooks you will have to put a variable and the function
if you have "todo" you will also need setTodo and useState and will have the initial value of empty string = "" */
	}

	const [todos, setTodos] = useState([]);

	const Enter = e => {
		if (e.key === "Enter") {
			//console.log(e.target.value);
			setTodos(todos.concat(e.target.value));
		}
	};

	return (
		<div id="container">
			<h1>TodoList</h1>
			<input type="text" onKeyDown={Enter} />
			<ul>
				{todos.map((t, index) => (
					<li key={index}>{t}</li>
				))}
			</ul>
		</div>
	);
};
