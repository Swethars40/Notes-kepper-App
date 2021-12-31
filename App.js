import React, { useState } from "react";
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import CreatingNote from "./CreatingNote";
import EachNote from "./EachNote";

function App() {

  const [allnotes, setAllNotes] = useState([])

  function addNote(newNote)
  {
    setAllNotes(prevNote => {
      return [ ...prevNote, newNote ]
    })
  }

  function deleteNote(id) {
    setAllNotes(prevNote => {
      return prevNote.filter((newNote, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreatingNote
        addingNote= {addNote}
      />
      {allnotes.map( (singleNote, index) => {
        return (
          <EachNote
            key= {index}
            id= {index}
            noteTitle= {singleNote.title}
            noteContent= {singleNote.content}
            noteDelete= {deleteNote}
          />
        );
      }
    )}
      <Footer />
    </div>
  );
}

export default App;
