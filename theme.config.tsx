import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  project: {},
  editLink: {
    text: "Edit this page on GitHub",
  },
  feedback: { content: null },
  footer: { component: null },
  navigation: false,

  search: { placeholder: "Search" },

  logo: (
    <>
      <svg
        width="35"
        height="17"
        viewBox="0 0 35 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.1893 16.25H18.75L18.75 1.81066L33.1893 16.25Z"
          className="stroke-black dark:stroke-white"
          stroke-width="1.5"
        />
        <path d="M17 0V17L0 17L17 0Z" className="fill-black dark:fill-white" />
        <path
          d="M18 17L18 0L35 7.43094e-07L18 17Z"
          className="fill-black dark:fill-white"
        />
      </svg>
      <span className="pl-2 font-bold">Kannag</span>
    </>
  ),

  docsRepositoryBase:
    "https://github.com/arunkumarvc/notes-and-docs/blob/main/",

  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return (
          <span className="cursor-default text-gray-900 dark:text-gray-50">
            {title}
          </span>
        );
      }

      const heading = [
        "Hardhat",
        "Solidity",
        "Ethers",
        "Connect Wallet",
        "Blockchain Notes",

        "Next.js",
        "React",
        "Fetch Data",
      ];
      for (let i = 0; i < heading.length; i++) {
        if (title === heading[i]) {
          return (
            <span className="font-semibold text-gray-900 dark:text-gray-50">
              {title}
            </span>
          );
        }
      }

      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 2,
    toggleButton: true,
  },

  useNextSeoProps() {
    return {
      titleTemplate: "%s | Kannag",
    };
  },

  head: () => {
    const { title } = useConfig();

    return (
      <>
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="author" content="Arun Kumar" />
        <meta
          name="description"
          content="Notes and Docs for Blockchain Development and Design."
        />

        <meta name="twitter:site" content="@arunastra" />
        <meta name="twitter:creator" content="@arunastra" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/assets/og-image.jpg" />
        <meta name="twitter:site:domain" content="kannag.vercel.app" />
        <meta name="twitter:url" content="https://kannag.vercel.app" />

        <meta
          name="og:title"
          content={title ? title + " | Kannag" : "Kannag"}
        />
        <meta
          name="og:description"
          content="Notes and Docs for Blockchain Development and Design."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kannag.vercel.app/" />
        <meta name="og:image" content="/assets/og-image.jpg" />

        <meta name="apple-mobile-web-app-title" content="Kannag" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </>
    );
  },
};

export default config;
