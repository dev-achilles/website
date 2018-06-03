/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Wednesday, 30th May 2018 12:59:49 pm
 * Last Modified: Thursday, 31st May 2018 2:38:38 pm
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { uploadDocsApi } from '../services';

class UploadImage extends Component {
  static propTypes = {
    callback: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      uploading: false,
      success: false,
      error: false,
      accept: 'image/jpeg, image/png',
      files: [],
      dropzoneActive: false,
    };
  }

  onDragEnter = () => {
    this.setState({
      dropzoneActive: true,
    });
  };

  onDragLeave = () => {
    this.setState({
      dropzoneActive: false,
    });
  };

  onDrop = (files) => {
    this.setState({
      files,
      dropzoneActive: false,
    },
    () => {
      this._onProcess(files[0]);
    });
  };

  applyMimeTypes = (event) => {
    this.setState({
      accept: event.target.value,
    });
  };
  _onProcess = (file) => {
    if (this.state.uploading) return;
    const data = new FormData();
    data.append('files', file);
    this.setState({ uploading: true }, async () => {
      try {
        const img = await uploadDocsApi(data);
        const { url } = img.data.file[0];
        this.props.callback(url);
        this.setState({
          success: true,
          error: false,
          uploading: false,
        });
      } catch (err) {
        console.log(err);
        this.setState({
          success: false,
          error: true,
          uploading: false,
        });
      }
    });
  };

  renderProgress = () => (
    <div className="lds-facebook">
      <div />
      <div />
      <div />
    </div>
  );

  renderStatus = () => {
    if (this.state.uploading) return this.renderProgress();
    if (this.state.success) {
      return (
        <div className="upload-success">
          <i className="fa fa-check" />
        </div>
      );
    }
    if (this.state.error) {
      return (
        <div className="upload-error">
          <i className="fa fa-exclamation-triangle" />
        </div>
      );
    }
    return (
      <div className="upload-init">
        <img src={require('../../assets/images/ic-upload.png')} alt="" className="upload-icon" />
        <p>Choose your file or drag here</p>
      </div>
    );
  };

  render() {
    const { accept, files, dropzoneActive } = this.state;
    const overlayStyle = {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      padding: '2.5em 0',
      background: 'rgba(0,0,0,0.5)',
      textAlign: 'center',
      color: '#fff',
    };
    /*eslint-disable*/
    return (
      <Dropzone
        multiple={false}
        style={{ position: 'relative', backgroundColor: '#cccccc' }}
        accept={accept}
        onDrop={this.onDrop}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        className="wrap-upload-image"
      >
        {this.state.files.length > 0 ? (
          <div className="upload-preview">
            <img alt="" src={this.state.files[0].preview} />
          </div>
        ) : null}
        <div className="upload-status">{this.renderStatus()}</div>
      </Dropzone>
    );
  }
}
const mapStateToProps = state => ({
  ...state.auth,
});
export default connect(mapStateToProps)(UploadImage);
