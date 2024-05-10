

export const todoReducer = ( initalState = [], action ) => {
	switch (action.type) {
		case 'Add Todo':
			return [ ...initalState, action.payload ];
		case 'Remove Todo':
			return ( initalState.filter( todo => todo !== action.payload ));
		case 'Toggle Todo':
			return ( initalState.map( todo => {if(todo === action.payload){
				return({
					...todo,
					done: !(todo.done)
				})
			}
			else return	todo
		}))
		default:
			return initalState;
	}
}