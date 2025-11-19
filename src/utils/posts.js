// Get all posts metadata
export const getAllPosts = () => {
  const posts = import.meta.glob('../posts/*.{md,mdx}', { eager: true });

  return Object.entries(posts)
    .map(([path, post]) => {
      const slug = path.replace('../posts/', '').replace(/\.(md|mdx)$/, '');
      return {
        slug,
        ...post.frontmatter,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first
};

// Get a single post by slug
export const getPostBySlug = async (slug) => {
  try {
    // Try .mdx first, then .md
    let post;
    try {
      post = await import(`../posts/${slug}.mdx`);
    } catch {
      post = await import(`../posts/${slug}.md`);
    }

    return {
      slug,
      frontmatter: post.frontmatter,
      Content: post.default,
    };
  } catch (error) {
    return null;
  }
};

// Format date helper
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
