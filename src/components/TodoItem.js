import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { BiCheckCircle } from 'react-icons/bi';

export default function TodoItem(props) {
	const { todo, removeTodo, completeTodo } = props;
	return (
		<div className={todo.completed ? 'todo-row complete' : 'todo-row'}>
			{todo.text}
			<div className="iconsContainer">
				<RiCloseCircleLine onClick={() => removeTodo(props.todo.id)} />
				<BiCheckCircle onClick={() => completeTodo(todo.id)} />
			</div>
		</div>
	);
}
