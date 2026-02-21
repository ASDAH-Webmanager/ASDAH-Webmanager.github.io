# My Site

A Jekyll static site deployed via GitHub Pages.

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
