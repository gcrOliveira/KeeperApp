import React from 'react'
function Note(props){
  function handleDelete(event){
    event.preventDefault();
    props.removeNote(props.id);
  }
  return (
    <note class="note row">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleDelete}>Delete</button>
    </note>
  );
}
export default Note
