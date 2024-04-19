"use client";

// import { motion } from "framer-motion";
// import "./Feedback.css";
// import { InsightCard, TitleText, TypingText } from "../components";

// import styles from "../styles";
// import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

// function Feedback() {
//   return (
//     <div className="partner-section" id="sponser">
//      OUR SPONSORS
//     </div>
   
//   );
// }

// export default Feedback;

import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    // Here you can implement the logic to upload the file, for example using fetch API or axios
    // You can also send the file to a server for processing or storage
    console.log('Uploading file:', file);
  };

  return (
    <div className="upload-container text-white">
      <input
        type="file"
        id="fileInput"
        className="file-input"
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput" className="upload-button">
        Choose File
      </label>
      {file && (
        <div className="file-info text-white">
          <p>Selected file: {file.name}</p>
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}
    </div>
  );
};

export default Feedback;
