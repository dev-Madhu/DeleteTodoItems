// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItemsList, deleteUser} = props
  const {id, title} = todoItemsList

  const onDeleteButton = () => {
    deleteUser(id)
  }
  return (
    <li className="todoItem-container">
      <p className="title">{title}</p>
      <button className="delete-button" type="button" onClick={onDeleteButton}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
