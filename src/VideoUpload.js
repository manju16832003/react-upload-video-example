import React, { Component } from 'react';
import './UploadVideo.css';

let request = require('superagent')
var apiUrl = "http://localhost:3001/"

export default class VideoUpload extends Component {

  constructor (props) {
    super(props)
    this.state = {
      filesInput: '',
      message: ''
    }
  }

  handleUploadVideo = (event) => {
    this.setState({ message: 'Upload in progress...' })
    const files = this.filesInput.files
    console.log('FILES', files)
    var req = request.post(apiUrl + 'video/upload')
    req.attach(files[0].name, files[0])

    req.end((err, res) => {
      console.log('Upload completed!')
      if (err) {
        console.log('Error uploading video: ', err)
      }

      if (res.statusText === 'OK' && res.statusCode === 200) {
        this.setState({ message: 'Video Uploaded Successfully!!!' })
      }
    })
  }

  render () {
    return (
      <div className="container  p-y-1">
        <div className="row m-b-1">
          <div className="col-sm-6 offset-sm-3">
            <div><strong>{ this.state.message }</strong></div>
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
