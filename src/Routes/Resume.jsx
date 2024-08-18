import React from "react";

const Resume = () => {
  return (
    <>
      <iframe
        src="/MarianiResume.pdf#zoom=67"
        width="100%"
        height="600px"
        style={{ border: "none" }}
        title="Santiago Mariani - Resume"
      >
        <p>
          Your device doesn't support displaying PDFs inline.{" "}
          <a href="/MarianiResume.pdf" download>
            Click here to download the resume.
          </a>
        </p>
      </iframe>
    </>
  );
};

export default Resume;
