import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Notes from "../notes"

function App() {
    const [input, setInput] = useState({ title: undefined, content: undefined })
    const [notes, setNote] = useState(Notes)

    function handleClick(event) {
        setNote(preVal => [...preVal, input])
        setInput(() => ({ title: "", content: "" }))
        event.preventDefault();
    }

    function changeNote(event) {
        const { name, value } = event.target
        setInput(preval => name === "title" ? { title: value, content: preval.content } : { title: preval.title, content: value })
    }

    function toDelete(id) {
        console.log(id + " is called to be deleted")
        setNote(preVal => {
            return preVal.filter((items, index) => { return index !== id })
        })
    }
    return (
        <div>
            <Header />
            <CreateArea click={handleClick} newNote={changeNote} titleVal={input.title} contentVal={input.content} />
            {notes.map((n, index) =>
                <Note
                    key={index}
                    heading={n.title}
                    content={n.content}
                    toRemove={() => toDelete(index)}
                />
            )}
            <Footer />
        </div>
    );
}

export default App;
