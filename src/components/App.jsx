import React, {useState} from 'react'
import {Header, Footer, Note, Composer} from '../components'
function App(){
  const [notes, setNotes]=useState([]);
  function addNote(note){
    setNotes(prevNotes =>{
      return[...prevNotes,note];
    })
  }
  function removeNote(id){
    setNotes(prevNotes=>{return prevNotes.filter((note,index)=>{
      return index !==id;
        })
    });
  }
  return (
  <app>
    <Header></Header>
    <Composer addNote={addNote}>
    </Composer>
    {notes.map((note, index) => {return(<Note key={index}
                                       id={index}
                                       title={note.noteTitle}
                                       content={note.noteContent}
                                       removeNote={removeNote}
    ></Note>);})}
    <Footer></Footer>
  </app>
);
}

export default App;
