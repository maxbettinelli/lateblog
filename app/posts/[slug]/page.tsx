import React from 'react'
import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from "gray-matter"
import getPostMetadata from '@/components/getPostMetadata';


  const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

function PostPage(props: any) {

    const slug = props.params.slug;
    const post = getPostContent(slug);


  return (
    <div>
      <div className='my-8'>
      <h1 className='font-semibold text-2xl italic text-red-900 text-center'><Markdown>{post.data.title}</Markdown></h1>
      <h1 className='text-sm text-red-900 text-center mt-6'><Markdown>{post.data.date}</Markdown></h1>
      </div>
        <article className='prose lg:prose-xl'>        
          <Markdown>{post.content}</Markdown>
        </article>

    </div>
  )
}

export default PostPage;