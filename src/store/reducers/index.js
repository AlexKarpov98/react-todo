import * as actionTypes from '../actions/action-types'

const initialState = {
  todoList: JSON.parse( localStorage.getItem('todoList') ) || []
};

const updateLocalStorage = (todoList) => localStorage.setItem('todoList', JSON.stringify(todoList))

const addTodo = (state, action) => {
  const updatedState = [{...action.item}, ...state.todoList]

  updateLocalStorage(updatedState)

  return {
    ...state,
    todoList: updatedState
  }
}

const toggleTodo = (state, action) => {
  const updatedState = state.todoList.map(todo => {
    if ( todo.id === action.id ) {
      todo.completed = !todo.completed;
    }

    return todo;
  })

  updateLocalStorage(updatedState)

  return {
    ...state,
    todoList: updatedState
  }
}

const clearTodos = (state, action) => {
  updateLocalStorage([])

  return {
    ...state,
    todoList: []
  }
}

const completeAllTodos = (state, action) => {
  const updatedState = state.todoList.map(item => {
    item.completed = !action.isAllCompleted;
    return item;
  })

  updateLocalStorage(updatedState)

  return {
    ...state,
    todoList: updatedState
  }
}

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
      case actionTypes.ADD_TODO: return addTodo(state, action)

      case actionTypes.TOGGLE_TODO: return toggleTodo(state, action)

      case actionTypes.CLEAR_TODOS: return clearTodos(state, action)

      case actionTypes.COMPLETE_ALL_TODOS: return completeAllTodos(state, action)

      default:
          return state;
  }
};

export default reducer;