import BlogLayout from '@/components/layout/BlogLayout';
import RootLayout from '@/components/layout/RootLayout';
import React from 'react'
import PostCard from './postCard';

const Blog = () => {
  return (
    <div className=''>
      <PostCard/>
    </div>
  )
}

export default Blog;

Blog.getLayout = function getLayout(page) {
  return (
   <RootLayout>
    <BlogLayout>
      {page}
    </BlogLayout>
   </RootLayout>
  )
}
