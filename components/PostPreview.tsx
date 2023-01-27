import React from 'react'
import { PostMetadata } from './PostMetadata'
import Link from 'next/link'

function PostPreview(props: PostMetadata) {
  return (
    <div className='border border-red-300 p-6 rounded-lg shadow-lg bg-slate-50 hover:bg-red-50 transition duration-300' >
        <p className='text-xs text-slate-400 mb-4'>{props.date}</p>

        <Link href={`/posts/${props.slug}`}>
            <h2 className=" text-red-900 hover:underline mb-4">{props.title}</h2>
        </Link>
        <p className='text-xs text-slate-700'>{props.subtitle}</p>
    </div>
  )
}

export default PostPreview