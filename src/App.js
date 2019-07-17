import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone'
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import './App.css';
import DocumentIcon from './assets/documentIcon.png';
import AppIcon from './assets/logo__sm--white.png';
import uploadIcon from './assets/upload__icon.png'

function App() {
  const [uploadedFiles, addToUploadfiles] = useState([])
  const [selectedDocument, updateSelectedDocument] = useState({})
  const onDrop = acceptedFiles => {
    addToUploadfiles([...uploadedFiles, ...acceptedFiles])
  }
  const {getRootProps, getInputProps} = useDropzone({onDrop})
  return (
    <div className="container">
      <div className="pdfUploadSection">
      <div><img className="logo__sm--white" src={AppIcon}></img></div>
      <div className="section__title">FILES</div>
        {Array.isArray(uploadedFiles) && uploadedFiles.map((file, index) => {
            const documentNumber = ('0' + (index + 1)).slice(-2)
            return (
              <div className="uploadSectionFiles" onClick={() => updateSelectedDocument({file, documentNumber})}>
                <div><img src={DocumentIcon}></img></div>
                <div className="fileName__container">
                   <div className="fileName--title">Document {documentNumber}</div>
                   <div className="fileName--subtitle">Nam vel porta velit</div>
                </div>
               
              </div>
            )
          })}
        <div className="uploadButtonContainer">
          <div {...getRootProps()} className="dropzoneHelper">
            <input {...getInputProps()} />
            <button className="uploadButton"><img src={uploadIcon}></img> Upload Files</button>
          </div>
        </div>
      </div>
      <div className="pdfViewSection">
        {selectedDocument.documentNumber && (`Document ${selectedDocument.documentNumber}`)}
      </div>
    </div>
  );
}

export default App;
