import React from "react";
import "./explore-posts.css";

export default function ExplorePosts() {
  const numberOfPhotos = 6; // Change this number to match the total number of photos
  const photoBaseUrl = "../../../../../public/bali-explore-"; // Change this to the base path of your photos

  const photos = Array.from({ length: numberOfPhotos }, (_, index) => {
    const photoUrl = `${photoBaseUrl}${index + 1}.jpg`;
    return (
      <div
        key={index}
        className="col-md-4 mb-1 posts"
        style={{ padding: "1px" }}
      >
        <img
          src={photoUrl}
          alt={`Bali Explore ${index + 1}`}
          className="img-fluid"
        />
      </div>
    );
  });

  return (
    <div className="row mb-5">
      <div className="col mb-1">
        <strong>Top Posts</strong>
      </div>
      <div className="col-12">
        <div className="row">{photos}</div>
      </div>
    </div>
  );
}
