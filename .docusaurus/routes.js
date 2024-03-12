import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'f06'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'f86'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '1d0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'aec'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '37a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '99a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '7f1'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e71'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '85f'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'c39'),
    exact: true
  },
  {
    path: '/blog/greetings',
    component: ComponentCreator('/blog/greetings', 'f8d'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '2f6'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'c6a'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '1f2'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'dad'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '6a1'),
    exact: true
  },
  {
    path: '/blog/tags/greetings',
    component: ComponentCreator('/blog/tags/greetings', '826'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'ad5'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '286'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '88b'),
    exact: true
  },
  {
    path: '/foo',
    component: ComponentCreator('/foo', '0f1'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '09a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '88e'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '61b'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '516'),
            routes: [
              {
                path: '/docs/getting_started/',
                component: ComponentCreator('/docs/getting_started/', 'ac9'),
                exact: true
              },
              {
                path: '/docs/getting_started/learning_roadmap',
                component: ComponentCreator('/docs/getting_started/learning_roadmap', 'f05'),
                exact: true
              },
              {
                path: '/docs/introduction/',
                component: ComponentCreator('/docs/introduction/', 'b77'),
                exact: true,
                sidebar: "introduction"
              },
              {
                path: '/docs/introduction/applications/',
                component: ComponentCreator('/docs/introduction/applications/', 'a85'),
                exact: true,
                sidebar: "introduction"
              },
              {
                path: '/docs/introduction/applications/enterprise-apps',
                component: ComponentCreator('/docs/introduction/applications/enterprise-apps', 'aca'),
                exact: true,
                sidebar: "introduction"
              },
              {
                path: '/docs/introduction/applications/text-gen',
                component: ComponentCreator('/docs/introduction/applications/text-gen', '5f3'),
                exact: true,
                sidebar: "introduction"
              },
              {
                path: '/docs/introduction/buzzwords',
                component: ComponentCreator('/docs/introduction/buzzwords', 'a75'),
                exact: true,
                sidebar: "introduction"
              },
              {
                path: '/docs/introduction/integrations',
                component: ComponentCreator('/docs/introduction/integrations', '40c'),
                exact: true,
                sidebar: "introduction"
              },
              {
                path: '/docs/introduction/relation-to-ai',
                component: ComponentCreator('/docs/introduction/relation-to-ai', '84a'),
                exact: true,
                sidebar: "introduction"
              },
              {
                path: '/docs/introduction/security',
                component: ComponentCreator('/docs/introduction/security', '358'),
                exact: true,
                sidebar: "introduction"
              },
              {
                path: '/docs/workshop/',
                component: ComponentCreator('/docs/workshop/', 'a0d'),
                exact: true,
                sidebar: "workshop"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e6f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
