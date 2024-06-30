import React, { useState } from "react";



//create your first component
const Home = () => {

	const [inputValue, setInputValue]= useState("");
	const [todos, setTodos]= useState([]);

	return (
		<div>
			<h1 className="titulo">TODOS</h1>
			<div className="contenedor">
				<ul>
					<li>
					<input 
					type="text"
					onChange={(e)=> setInputValue(e.target.value)} 
					value={inputValue}
					onKeyDown ={(e)=> {
						if(e.key.toLowerCase()==='enter'){
							setTodos(todos.concat(inputValue));
							setInputValue('');
						}
					}}
					placeholder="What do you need todo?" ></input>
					</li>
					
					{todos.map((item, index)=> (
					<li key={index}>
						{item}{""}
						<i class="fa-regular fa-trash-can" onClick={()=> setTodos(todos.filter((t,currentIndex)=> index !=currentIndex))}></i> 
					</li>
					))}
				</ul>
				<div className="numTasks">{todos.length} Tasks</div>
			</div>
		</div>
	);
};

export default Home;
