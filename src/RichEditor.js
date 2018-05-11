import React, {Component} from 'react'
import {Editor, EditorState} from 'draft-js';

export default class RichEditor extends Component{

    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }


    handleChange = (editorState) => {
        this.setState({editorState});
    };

    render() {
        return (
            <Editor editorState={this.state.editorState} onChange={this.handleChange} />
        )
    }
}