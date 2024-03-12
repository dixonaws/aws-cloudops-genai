// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Generative AI in AWS',
    // tagline: 'Start your career in cloud operations and engineering',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://genai.aws-cloudops.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'aws-cloudops', // Usually your GitHub org/user name.
    projectName: 'aws-cloudops-genai', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/dixonaws/aws-cloudops-genai/tree/main/',
                },
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     editUrl:
                //         'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                // },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',

            navbar: {
                hideOnScroll: true,
                title: 'genai in aws',
                logo: {
                    alt: 'aws cloud ops logo',
                    src: 'img/aws-cloudops-logo.jpg',
                },
                items: [
                    {
                        type: 'doc',
                        position: 'left',
                        label: 'Introduction',
                        docId: 'introduction/index',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'workshop',
                        position: 'left',
                        label: 'Workshop',
                        docId: 'workshop/index',

                    },
                    //
                    // {
                    //     docId: 'docs/introduction/instructorled',
                    //     to: 'docs/introduction/instructorled',
                    //     label: 'Register Now!',
                    //     position: 'right',
                    // },
                    // {
                    //     href: 'https://github.com/dixonaws/aws-cloudops',
                    //     label: 'GitHub',
                    //     position: 'right',
                    // },
                ],
            },
            docs: {
                sidebar: {
                    autoCollapseCategories: false,
                },
            },
            footer: {
                style: 'dark',
                links: [

                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Philosophy',
                                to: '/docs/introduction/philosophy',
                            },
                            {
                                label: 'About Us',
                                to: '/docs/introduction/about',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/dixonaws/aws-cloudops-genai/',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Silver Lining`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
