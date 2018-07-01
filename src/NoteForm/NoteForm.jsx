import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			newNoteContent: '',
		};
		this.handleUserInput = this.handleUserInput.bind(this);
		this.writeNote = this.writeNote.bind(this);

	}

	// set the newNoteContent
	// to value of input
	handleUserInput(e){
		this.setState({
			newNoteContent: e.target.value, // value of text input
		})
	}

	writeNote(){
		// call a method that sets the noteContent for a note to
		// the value of the input
		this.props.addNote(this.state.newNoteContent);
		// set newNoteContent back to empty string.
		this.setState({
			newNoteContent: '',
		})
	}

	render() {
		return(
			<div>
				<input className="noteInput"
				placeholder="Write a new note..." value={this.state.newNoteContent} onChange={this.handleUserInput} />
				<button className="noteButton" onClick={this.writeNote}>Add</button>
			</div>
		)
	}
}

export default NoteForm;