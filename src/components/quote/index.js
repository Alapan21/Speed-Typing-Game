import React from "react";

const Quote = () => {
  return (
    <div className="quote">
      <h2 id="quote">loading text...</h2>
      <div className="charactercount">
        <p>
          Letter Count <span id="charCount">0</span>
        </p>
      </div>
      <div className="wordcount">
        <p>
          Word Count <span id="wordCount">0</span>
        </p>
      </div>
    </div>
  );
};

export default Quote;
