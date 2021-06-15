export default {
  "title": "Beem Africa",
  "tagline": "beem-africa integration made easy",
  "url": "https://kalebu.github.io",
  "baseUrl": "/BeemAfrica/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/beem.ico",
  "organizationName": "kalebu",
  "projectName": "BeemAfrica",
  "themeConfig": {
    "navbar": {
      "title": "Home",
      "logo": {
        "alt": "Logo",
        "src": "img/download.png"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Docs",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/beem-africa/python-client",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Tutorial",
              "to": "/docs/intro"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/BeemAfrica"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/BeemAfrica"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/BeemAfrica"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/beem-africa/python-client"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 BeemAfrica, Inc. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/kalebu/Work/Personal/Opensource/docs/BeemAfrica/sidebars.js",
          "editUrl": "https://github.com/Kalebu/BeemAfrica/edit/main/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/Kalebu/BeemAfrica/edit/main/blog/"
        },
        "theme": {
          "customCss": "/home/kalebu/Work/Personal/Opensource/docs/BeemAfrica/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};