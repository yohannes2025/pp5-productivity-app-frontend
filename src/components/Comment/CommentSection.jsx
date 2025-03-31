// //CommentSection.jsx:
// import React, { useState } from 'react';

// const CommentSection = ({ comments }) => {
//   const [newComment, setNewComment] = useState('');

//   const handleCommentChange = (e) => {
//     setNewComment(e.target.value);
//   };

//   const handleCommentSubmit = () => {
//     if (newComment.trim() !== '') {
//       // Add the new comment to the comments array
//       // (assuming the comments prop is an array)
//       comments.push({ id: Date.now(), text: newComment });
//       setNewComment('');
//     }
//   };

//   return (
//     <div className="comment-section">
//       <h3>Comments</h3>
//       <div className="comment-input">
//         <input
//           type="text"
//           placeholder="Add a comment..."
//           value={newComment}
//           onChange={handleCommentChange}
//         />
//         <button onClick={handleCommentSubmit}>Submit</button>
//       </div>
//       <div className="comments">
//         {comments.map((comment) => (
//           <div key={comment.id} className="comment">
//             <p>{comment.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CommentSection;




import React, { useState } from "react";

const CommentSection = ({ comments = [] }) => {
  // Default value to empty array
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      // Create the new comment object
      const newCommentObject = { id: Date.now(), text: newComment };

      // Assuming we're using a function to update comments instead of directly mutating
      // comments.push(newCommentObject); (this mutates the props array directly)
      // To properly manage state, comments should be updated through props...
      // You could use a callback function passed as a prop to update the parent component

      setNewComment("");
    }
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <div className="comment-input">
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={handleCommentChange}
        />
        <button onClick={handleCommentSubmit}>Submit</button>
      </div>
      <div className="comments">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;