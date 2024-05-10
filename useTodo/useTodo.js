import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

const initialState = JSON.parse (localStorage.getItem( 'todos')) || [];

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState );

	useEffect(() => {
		localStorage.setItem( 'todos', JSON.stringify(todos) )
	}, [todos])

	const onNewTodo = ( todo ) =>{
		const action = {
			type: 'Add Todo',
			payload: todo
		}
		dispatch( action );
	}

	const onRmClic = (todo) => {
		const action = {
			type: 'Remove Todo',
			payload: todo
		}
		dispatch( action );
	}

	const onToggleTodo = ( todo ) => {
		const action = {
			type: 'Toggle Todo',
			payload: todo
		}
		dispatch( action );
	}

    return (
    {todos, onNewTodo, onRmClic, onToggleTodo  }
    )
}
