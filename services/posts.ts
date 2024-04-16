import type { Post } from '@prisma/client';

import { prisma } from '@/lib/prisma';

/**
 * Post CRUD operations
 */
export const postService = {
  create(data: Omit<Post, 'id'>) {
    return prisma.post.create({ data });
  },
  get(id: string) {
    return prisma.post.findUnique({ where: { id } });
  },
  list() {
    return prisma.post.findMany();
  },
  update(id: string, data: Omit<Post, 'id'>) {
    return prisma.post.update({ where: { id }, data });
  },
  remove(id: string) {
    return prisma.post.delete({ where: { id } });
  },
};
