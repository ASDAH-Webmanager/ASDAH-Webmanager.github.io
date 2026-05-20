# Documentation

Officer information is set in `_data\officers.yml`

---

To add more posts, create a new file in `_posts/` following the naming convention: `YYYY-MM-DD-your-post-title.md`

Each file needs a front matter block at the top:

```yaml
---
layout: post
title: Your Post Title
date: YYYY-MM-DD
---
```

Everything below the front matter is written in Markdown and will be rendered automatically on the News page and at its own URL.

---

## Structure

```
.
├── _config.yml          # Jekyll configuration
├── Gemfile              # Ruby dependencies
├── index.html           # Home
├── about.md             # About page
├── news.html            # News page
├── research.md          # Research page
├── 404.html             # Custom 404 page
├── _includes/
│   ├── footer.html
│   ├── head.html
│   └── nav.html
├── _layouts/
│   ├── default.html
│   ├── home.html
│   ├── page.html
│   └── post.html
├── _posts/
│   └── 2026-02-21-welcome.md
├── css/
│   └── style.css
└── js/
    └── main.js
```

`_site/` is the generated output directory and should not be edited directly.

## Local Development

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000` in your browser.

## Deploy to GitHub Pages

1. Create a repository named `<username>.github.io` on GitHub.
2. Push this folder to the `main` branch.
3. Go to **Settings → Pages**, set source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Your site will be live at `https://<username>.github.io` within a minute or two.

> The `404.html` at the root is automatically served by GitHub Pages for missing URLs.
