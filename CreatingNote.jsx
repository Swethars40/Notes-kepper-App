import React,{ useState } from "react";

function CreatingNote(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    }) ;

    function handleChange(event) {
        const {name, value} = event.target;
        
        setNote( prevVal => {
            return {
                ...prevVal,
                [name]: value
            };
        });
    }

    function creatNewNote(event){
        props.addingNote(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
        return ;
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} name="title" value={note.title} placeholder="title here..." />
                <textarea onChange={handleChange} name="content" value={note.content} placeholder="contents here..." rows="3" />
                <button onClick={creatNewNote}>Add</button>
            </form>
        </div>
    );
}

export default CreatingNote;