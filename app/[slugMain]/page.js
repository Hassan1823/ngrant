import CompBanner from "@/components/CompBanner";
import React from "react";

const page = ({params}) => {
  const slug = params?.slugMain?.replace(/%20/g, ' ') || ''; // replace '-' with ' '
  console.log("slug params are : ", slug);
  return (
    <div>
      <CompBanner title={slug}/>
      Remaining page
    </div>
  );
};

export default page