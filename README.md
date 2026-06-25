gvarc
=====

Website for the Guadalupe Valley Amateur Radio Club.

The site is published using Jekyll and uses Zurb Foundation.

#### Current Jekyll Version: 4.4.1
#### Current Foundation Version: 5.5.0

Getting started
---------------

1. Install Ruby and Bundler if needed:
   ```sh
   gem install bundler
   ```
2. Install dependencies:
   ```sh
   bundle install
   ```
3. Build and serve the site locally:
   ```sh
   bundle exec jekyll serve
   ```
4. Open the site at `http://127.0.0.1:4000`.

Notes
-----

- The site uses `jekyll-paginate` for news pagination.
- If you deploy the site under a subpath, set `baseurl` in `_config.yml` and update asset paths.

