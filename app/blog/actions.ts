'use server';

import type { Post } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { postService } from '@/services/posts';

export async function createNewPost(data: FormData) {
  const { title, body } = Object.fromEntries(data) as Omit<Post, 'id'>;

  const post = await postService.create({ title, body });

  redirect(`/blog/${post.id}`);
}

export async function updatePost(data: FormData) {
  const { title, body, id } = Object.fromEntries(data) as Post;

  const post = await postService.update(id, { title, body });

  revalidatePath(`/blog/${post.id}`);
  redirect(`/blog/${post.id}`);
}

export async function removePost(id: string) {
  await postService.remove(id);

  revalidatePath('/blog');
  redirect('/blog');
}
