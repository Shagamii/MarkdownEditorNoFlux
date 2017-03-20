import React, { Component } from 'react';
import './App.css';
import AceEditor from 'react-ace';
import ReactMarkdown from 'react-markdown';

import 'brace/mode/markdown';
import 'brace/theme/github';

export default class MarkdownEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: ""
    };
  }

  onChangeCode = newValue =>
    this.setState({ code: newValue })

  render() {

    return (
      <div className="App">
        <div className="editor">
          <AceEditor
            mode="markdown"
            theme="github"
            fontSize="16"
            value={ this.state.code }
            onChange={ this.onChangeCode }
            />
        </div>
        <div className="MarkdownRendering">
          <ReactMarkdown
           source={ this.state.code }
           onChange={ this.onChangeCode }
           />
        </div>
      </div>
    );
  }
}
