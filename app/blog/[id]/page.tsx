import { Metadata } from 'next';
import Link from 'next/link';

import { postService } from '@/services/posts';

import { removePost } from '../actions';

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const posts: any[] = await postService.list();

  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const post = await postService.get(id);

  return {
    title: post?.title ?? '',
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await postService.get(id);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <form action={() => removePost(id)}>
        <input type="submit" value="delete post" />
      </form>

      <Link href={`/blog/${id}/edit`}>Edit</Link>
    </>
  );
}
