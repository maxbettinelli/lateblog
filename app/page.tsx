import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import Link from "next/link";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <div>
      <PostPreview key={post.slug} {...post} />
    </div>
  ));

  return (
    <main>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{postPreviews}</div>
    </main>
  );
};