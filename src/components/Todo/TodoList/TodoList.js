import React from 'react'
import TodoItem from './TodoItem/TodoItem'

export default function TodoList( props ) {
  let todos = 'No todo items, please consider create at least one!';
  let completeAllButton = null;

  const onSelectAllTrigger = () => {
    const selectedCount = props.items.filter(item => item.completed).length

    props.onSelectAll(selectedCount === props.items.length ? true : false);
  }

  if ( props.items.length > 0 ) {
    todos = (
      <div>
        {props.items.map((item, i) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              onItemClicked={() => props.onToggleTodo(item.id)}
            />
          )
        })}
      </div>
    );

    completeAllButton = (
      <button onClick={onSelectAllTrigger}>
        Select All
      </button>
    );
  }

  return (
    <>
      <br />

      {todos}

      <br />

      {completeAllButton}
    </>
  )
}
