import * as actionTypes from './action-types'

export const addTodo = (todoItem) => ({
  type: actionTypes.ADD_TODO,
  item: {
    title: todoItem,
    completed: false,
    id: `${new Date().toString()}__${Math.random().toString(36).substr(2, 9)}`
  }
})

export const toggleTodo = (todoId) => ({
  type: actionTypes.TOGGLE_TODO,
  id: todoId
})

export const clearTodos = () => ({
  type: actionTypes.CLEAR_TODOS
})

export const completeAllTodos = (isAllCompleted) => ({
  type: actionTypes.COMPLETE_ALL_TODOS,
  isAllCompleted
})