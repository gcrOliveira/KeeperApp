import React, {useState}   from 'react'
function Composer(props){
    const [note, setNote] = useState({
      noteTitle:"",
      noteContent:""
    })
    function handleChange(event){
      const {name, value} = event.target;
      setNote(prevNote=>{
        return{...prevNote,
              [name]:value};
      });
    }
    function submitNote(event){
      event.preventDefault();
      props.addNote(note);
      setNote({
        noteTitle:"",
        noteContent:""
      })
    }
  return (
    <composer>
    <div>
          <form>
            <input name="noteTitle" placeholder="Title" value={note.noteTitle} onChange={handleChange}/>
            <textarea name="noteContent" placeholder="Take a note..." rows="3" value ={note.noteContent} onChange={handleChange}/>
            <button onClick={submitNote}>Add</button>
          </form>
        </div>
    </composer>
  );
}
export default Composer
