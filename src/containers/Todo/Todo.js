import React from 'react'

import TodoForm from '../../components/Todo/TodoForm/TodoForm'
import TodoList from '../../components/Todo/TodoList/TodoList'

import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions'
import ResetTodos from '../../components/Todo/ResetTodos/ResetTodos';

const mapStateToProps = (state) => ({
  todos: state.todoList
})

const mapDispatchToProps = (dispatch) => ({
  onAddTodo: (todoItem) => dispatch( actions.addTodo(todoItem) ),
  onToggleTodo: (id) => dispatch( actions.toggleTodo(id) ),
  onClearTodos: () => dispatch( actions.clearTodos() ),
  onCompleteAllTodos: (isAllCompleted) => dispatch( actions.completeAllTodos(isAllCompleted) )
})

const Todo = (props) => {
  let resetTodos = null;

  if ( props.todos.length > 0 ) {
    resetTodos = <ResetTodos onResetTodos={props.onClearTodos} />
  }

  return (
    <div>
      <TodoForm
        onSubmit={(newTodo) => props.onAddTodo(newTodo)}
        onResetTodos={props.onClearTodos}
      />

      <TodoList
        items={props.todos}
        onToggleTodo={(id) => props.onToggleTodo(id)}
        onSelectAll={(isAllCompleted) => props.onCompleteAllTodos(isAllCompleted)}
      />

      {resetTodos}

    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
