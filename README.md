# Venture Penny Capital

Public site for [venturepenny.com](https://venturepenny.com).

Static files on `main`. Same layout as [picophone.net](https://github.com/trumanboyes/picophone.net).

## GitHub Pages

The site files are on `main`. Turn Pages on once:

1. Open [Pages settings](https://github.com/trumanboyes/venturepenny.com/settings/pages)
2. **Branch:** `main` → `/ (root)` → Save

The repo is at [github.com/trumanboyes/venturepenny.com](https://github.com/trumanboyes/venturepenny.com). After Pages is on it serves at [trumanboyes.github.io/venturepenny.com](https://trumanboyes.github.io/venturepenny.com/) and, with DNS, [venturepenny.com](https://venturepenny.com).

## Custom domain DNS

Point `venturepenny.com` at GitHub Pages:

**Apex (`@`)**

| Type | Value |
| --- | --- |
| A | `185.199.108.153` |
| A | `185.199.109.153` |
| A | `185.199.110.153` |
| A | `185.199.111.153` |

**www**

| Type | Value |
| --- | --- |
| CNAME | `trumanboyes.github.io` |
