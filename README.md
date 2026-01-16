# Portfolio Web - Astro

A modern, responsive portfolio website built with Astro, TypeScript, and TailwindCSS. Showcases projects through a clean, accessible design with optimized performance.

## 🏗 Project Architecture

### Tech Stack

- **Framework**: [Astro 5.16](https://astro.build/) - Static site generator
- **Language**: [TypeScript 5.9](https://typescriptlang.org/) - Type safety
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/) - Utility-first CSS
- **Content**: Astro Content Collections - Structured content management
- **SEO**: [@astrolib/seo](https://github.com/astrolib/seo) - Meta tags and SEO helpers
- **Icons**: Custom SVG components + Heroicons

### Directory Structure

``` text
src/
├── components/
│   ├── icons/          # SVG icon components
│   ├── sections/       # Page section components
│   └── ui/             # Reusable UI components
├── content/
│   ├── config.ts       # Content collections config
│   └── projects/       # Project markdown files
├── layouts/            # Page layout components
├── pages/              # Route pages (index.astro, projects/[slug].astro)
├── assets/             # Images, fonts, and other assets
└── utils/              # Utility functions

public/                 # Static assets (favicon, fonts)
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
