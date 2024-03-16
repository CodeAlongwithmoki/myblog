import React from "react";
import getPostMetadata from "../components/getPostMetadata";
import Link from "next/link";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">{postPreviews}</div>
  );
};

export default HomePage;
