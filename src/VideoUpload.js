import React, { Component } from 'react';
import './UploadVideo.css';

let request = require('superagent')
var apiUrl = "http://localhost:3001/"

export default class VideoUpload extends Component {

  constructor (props) {
    super(props)
    this.state = { filesInput: '' }
  }

  handleUploadVideo = (event) => {
    const files = this.filesInput.files
    console.log('FILES', files)
    console.log('File Name =>', files[0].name)
    var req = request.post(apiUrl + 'video/upload')
    req.attach(files[0].name, files[0])

    req.end((err, res) => {
      if (err) {
        console.log('Error uploading video: ', err)
      }

      console.log('Response:', res)
      console.log('Video Uploaded successfully!!!')
    })
  }

  render () {
    return (
      <div className="container  p-y-1">
        <div className="row m-b-1">
          <div className="col-sm-6 offset-sm-3">
            <label className="control-label">Select Video</label>
            <input type="file" className="form-control-file text-primary font-weight-bold" classID="inputFile"
                   accept="video/*" ref={(input) => { this.filesInput = input }}/>
            <br/>
            <button type="submit" onClick={this.handleUploadVideo} className="btn btn-warning btn-block">UPLOAD</button>
          </div>
        </div>
      </div>
    );
  }
}
