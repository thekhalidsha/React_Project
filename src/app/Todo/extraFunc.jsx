import React from "react";

function QuoteGenerator() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.quotable.io/quotes/random');

  var data = null; // Initialize data variable

  xhr.onload = function () {
    try {
      data = JSON.parse(xhr.response);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      data = { // Default data if there's an error
        content: "Not every wise person achieve success, not all successfull peoples are wise.",
        author: 'Mohammed Khalid',
      };
    }
  };
  xhr.send(); // Send the request

  // Wait for the data to be available before returning
  while (!data) {
    // Do nothing while waiting
  }

  return (
    <div>
      <p>{data.content}</p>
      <p>- {data.author}</p>
    </div>
  );
}

export default QuoteGenerator;