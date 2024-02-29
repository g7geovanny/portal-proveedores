import React from 'react';

const PDFViewer = ({ pdf }) => {
  return (
    <div>
      <embed src={pdf} type="application/pdf" width="100%" height="600px" />
    </div>
  );
};

export default PDFViewer;