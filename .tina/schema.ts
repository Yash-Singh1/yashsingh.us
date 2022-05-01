import { defineSchema, defineConfig } from 'tinacms';

export default defineSchema({
  collections: [
    {
      label: 'Home Page',
      name: 'home',
      path: 'content/home',
      format: 'json',
      fields: [
        {
          name: 'description',
          label: 'Description',
          type: 'string',
        },
        {
          name: 'projects',
          label: 'Projects',
          type: 'string',
          list: true,
        },
        {
          name: 'skills',
          label: 'Skills',
          type: 'object',
          list: true,
          ui: {
            itemProps: async function (item) {
              return {
                label: item?.name,
              };
            },
          },
          fields: [
            {
              name: 'name',
              label: 'Name',
              type: 'string',
            },
            {
              name: 'percentage',
              label: 'Percentage',
              type: 'number',
            },
            {
              name: 'priority',
              label: 'Priority',
              type: 'number',
            },
          ],
        },
      ],
    },
    {
      label: 'Posts',
      name: 'posts',
      path: 'content/posts',
      format: 'mdx',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          label: 'Subtitle',
          type: 'string',
        },
        {
          name: 'image',
          label: 'Image',
          type: 'string',
        },
        {
          name: 'author',
          label: 'Author',
          type: 'string',
        },
        {
          name: 'date',
          label: 'Date',
          type: 'datetime',
        },
        {
          name: 'keywords',
          label: 'Keywords',
          type: 'string',
          list: true,
        },
        {
          name: 'link',
          label: 'Link',
          type: 'string',
        },
        {
          name: 'body',
          label: 'Body',
          isBody: true,
          type: 'rich-text',
        },
      ],
    },
  ],
});

const branch = 'main';
const apiURL =
  process.env.NODE_ENV == 'development'
    ? 'http://localhost:4001/graphql'
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

export const tinaConfig = defineConfig({
  apiURL,
  cmsCallback: (cms) => {
    import('tinacms').then(({ RouteMappingPlugin }) => {
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        if (collection.name === 'home' && document.sys.filename === 'Home') {
          return '/';
        }

        return undefined;
      });
      cms.plugins.add(RouteMapping);
    });

    return cms;
  },
});
