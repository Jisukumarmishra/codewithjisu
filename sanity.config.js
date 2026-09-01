import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'jisu-portfolio',
  title: 'Jisu Kumar Portfolio',

  projectId: 'grxwl0en',
dataset: 'production',

  // projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  // dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});