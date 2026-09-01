import { sanityClient } from './client';

// ─── Projects ────────────────────────────────────────────────────

export async function getAllProjects() {
  const query = `*[_type == "project"] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    image,
    technologies,
    status,
    stars,
    githubUrl,
    liveUrl,
    accentColor,
    featured,
    order
  }`;
  return sanityClient.fetch(query);
}

export async function getProjectBySlug(slug) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    image,
    technologies,
    status,
    stars,
    githubUrl,
    liveUrl,
    accentColor,
    featured,
    order
  }`;
  return sanityClient.fetch(query, { slug });
}

// ─── WinBook ─────────────────────────────────────────────────────

export async function getAllWinbookPosts() {
  const query = `*[_type == "winbook"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    tags
  }`;
  return sanityClient.fetch(query);
}

export async function getWinbookPostBySlug(slug) {
  const query = `*[_type == "winbook" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    content,
    publishedAt,
    tags
  }`;
  return sanityClient.fetch(query, { slug });
}
