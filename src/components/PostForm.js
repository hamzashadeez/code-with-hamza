import React, { useState } from "react";
import "./header.css";

function PostForm() {
  const [image, setImage] = useState(null);
  const [question, setQuestion] = useState("");


  const postQuestion = ()=>{
      //post question to the database
  }
  return (
    <div className="bg-white shadow-sm rounded p-3 shadow-none">
      <textarea
        class="form-control post_textarea"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        id="textarea"
        placeholder="Ask question"
        rows="2"
      ></textarea>
      <div className="d-flex align-items-center justify-content-between">
        <i className="fa fa-file-image-o btn btn-light" aria-hidden="true"></i>
        <button
          disabled={question === "" ? true : false}
          className="btn btn-dark"
          onClick={()=>postQuestion()}
        >
          Post A Question
        </button>
      </div>
    </div>
  );
}

export default PostForm;
