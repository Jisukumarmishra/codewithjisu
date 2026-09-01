export const projectSchema = {
  name: 'project',
  title: 'Project',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Project Image / Icon',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Live',   value: 'Live'   },
          { title: 'In Dev', value: 'In Dev' },
        ],
        layout: 'radio',
      },
      initialValue: 'In Dev',
    },
    {
      name: 'stars',
      title: 'Star Count',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    },
    {
      name: 'accentColor',
      title: 'Accent Color (hex)',
      type: 'string',
      description: 'e.g. #3b82f6',
      initialValue: '#3b82f6',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 99,
    },
  ],
  preview: {
    select: { title: 'title', media: 'image', status: 'status' },
    prepare({ title, media, status }) {
      return { title, media, subtitle: status };
    },
  },
};
