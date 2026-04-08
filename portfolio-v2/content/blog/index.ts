import { ComponentType } from 'react'
import { BlogPostMeta } from '@/lib/types'

import * as tabLayout from './tab-layout-rounded-corners'

export interface BlogEntry {
  slug: string
  meta: BlogPostMeta
  Content: ComponentType
}

export const blogPosts: BlogEntry[] = [
  { slug: 'tab-layout-rounded-corners', meta: { slug: 'tab-layout-rounded-corners', ...tabLayout.meta }, Content: tabLayout.default },
].sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
