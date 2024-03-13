import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/docs', '61a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c0e'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '0ae'),
            routes: [
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
