import React from "react";
import { PostMetadata } from "./PostMetadata";
import Link from "next/link";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className=" bg-[#303030] rounded-md shadow-lg   shadow-black-500/50 p-2 py-4">
      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-xl text-white">{props.title}</h2>
      </Link>
      <p className="text-slate-400">{props.author}</p>
      <p className="text-slate-400">{props.date}</p>
    </div>
  );
};

export default PostPreview;
