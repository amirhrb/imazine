import React from "react";

const Aparat = ({ matchedTitle }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: matchedTitle.video.toString(),
      }}
      className="h_iframe-aparat_embed_frame "
    ></div>
  );
};

export default Aparat;
