export const winbookSchema = {
  name: 'winbook',
  title: 'WinBook Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 2,
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code',   value: 'code'  },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [{ name: 'href', type: 'url', title: 'URL' }],
              },
            ],
          },
        },
        {
          type: 'object',
          name: 'code',
          title: 'Code Block',
          fields: [
            { name: 'language', type: 'string', title: 'Language' },
            { name: 'code',     type: 'text',   title: 'Code'     },
          ],
          preview: {
            select: { language: 'language', code: 'code' },
            prepare({ language, code }) {
              return { title: language || 'Code', subtitle: (code || '').substring(0, 60) };
            },
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
  ],
  preview: {
    select: { title: 'title', media: 'coverImage', date: 'publishedAt' },
    prepare({ title, media, date }) {
      return {
        title,
        media,
        subtitle: date ? new Date(date).toLocaleDateString() : 'Draft',
      };
    },
  },
};
