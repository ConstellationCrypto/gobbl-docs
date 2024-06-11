import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import image_src from './images/logo.svg'

const config: DocsThemeConfig = {
  logo: (
    "Gobbl Docs"
  ),
  nextThemes: { defaultTheme: "light", forcedTheme: "light" },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Gobbl Testnet Docs",
    };
  },
  navigation: false,
};

export default config;
