import React from "react";
import "./explore-posts.css";

const urls = [
  "https://res.cloudinary.com/dfahwwvue/image/upload/v1697594796/bali-explore-1_uzgmu1.jpg",
  "https://res.cloudinary.com/dfahwwvue/image/upload/v1697595121/bali-explore-2_d5izoq.jpg",
  "https://res.cloudinary.com/dfahwwvue/image/upload/v1697594935/bali-explore-3_dh2es2.jpg",
  "https://res.cloudinary.com/dfahwwvue/image/upload/v1697594936/bali-explore-4_cty8hk.jpg",
  "https://res.cloudinary.com/dfahwwvue/image/upload/v1697594935/bali-explore-5_nxahip.jpg",
  "https://res.cloudinary.com/dfahwwvue/image/upload/v1697594935/bali-explore-6_bpnyck.jpg",
];

export default function ExplorePosts() {
  return (
    <div className="row mb-5">
      <div className="col mb-1">
        <strong>Top Posts</strong>
      </div>
      <div className="col-12">
        <div className="row">
          {urls.map((url, index) => (
            <div
              key={index}
              className="col-md-4 mb-1 posts image-container"
              style={{ padding: "1px" }}
            >
              <img
                src={url}
                alt={`Bali Explore ${index + 1}`}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
