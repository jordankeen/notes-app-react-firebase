import React, { Component } from 'react';
import logo from './logo.svg';
import Note from './Note/Note';
import './App.css';

class App extends Component {

  constructor(props){
	super(props);

	// we're going to setup the react state of our component
	this.state = {
	  notes: [
	  	{ id: 1, noteContent: "Note 1 here" },
	  	{ id: 2, noteContent: "Note 2 here" },
	  ],
	}
  }
  render() {
	return (
	  <div className="notesWrapper">
	  	<div className="notesHeader">
	  		<h1 className="heading">React & Firebase To-Do List</h1>
	  	</div>
	  	<div className="notesBody">
	  	{
	  		this.state.notes.map((note) => {
	  			return(
					<Note noteContent={note.noteContent} noteId={note.id} key={note.id}/>
	  			)
	  		})
	  	}
		</div>
		<div className="notesFooter">
			footer here
		</div>
	  </div>
	);
  }
}

export default App;
