
function EachNote(props) {

    function handleClick() {
        props.noteDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.noteTitle}</h1>
            <p>{props.noteContent}</p>
            <button onClick={handleClick}>delete</button>
        </div>
    );
}

export default EachNote;