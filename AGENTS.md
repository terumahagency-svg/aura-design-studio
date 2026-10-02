# Project Architecture Rules

- Use shared `BrandHeader` and `ServiceHero` components for site-wide brand navigation and service-page introductions, so visual updates remain consistent.
- Keep all palette values in semantic CSS tokens and consume them through Tailwind classes, so the brand remains themeable and consistent.
- Store uploaded brand media through Lovable Assets, while keeping only the derived 64px favicon in `public/`, so source control stays lightweight.