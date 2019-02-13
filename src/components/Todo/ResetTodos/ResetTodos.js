import React from 'react'

export default function ResetTodos({ onResetTodos }) {
  return (
    <>
      <br />
      <br />

      <hr />

      <button onClick={onResetTodos}>
        Reset Todos
      </button>
    </>
  )
}
