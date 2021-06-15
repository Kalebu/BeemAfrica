/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Beem Africa-Python client',
  tagline: 'beem-africa integration made easy',
  url: 'https://kalebu.github.io',
  baseUrl: '/BeemAfrica/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kalebu', // Usually your GitHub org/user name.
  projectName: 'BeemAfrica', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'BeemAfrica',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/kalebu/python-client',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/BeemAfrica',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/BeemAfrica',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/BeemAfrica',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/beem-africa/python-client',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BeemAfrica, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Kalebu/BeemAfrica/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
