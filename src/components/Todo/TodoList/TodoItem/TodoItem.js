import React from 'react'

export default function TodoItem( props ) {
  return (
    <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={props.onItemClicked}
      />

      <p
        onClick={props.onItemClicked}
        style={{'textDecoration': props.item.completed ? 'line-through' : 'none', 'margin': '0' }}>
          {props.item.title}
      </p>
    </div>
  )
}
