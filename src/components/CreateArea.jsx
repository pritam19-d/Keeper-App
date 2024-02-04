import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={props.newNote} value={props.titleVal} />
        <textarea name="content" placeholder="Take a note..." rows="3"onChange={props.newNote} value={props.contentVal} />
        <button onClick={props.click}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;