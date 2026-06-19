# Your Life Updates Site

A small, password-protected page for sharing updates, reading, writing, and
travels with friends. No coding experience needed to use it — just editing
text inside files.

---

## 1. Set your password (do this first)

1. Open `change-password.html` by double-clicking it (it'll open in your
   browser — no internet connection needed for this step).
2. Type the password you want to use.
3. Click **Generate**. A long code will appear and get copied automatically.
4. Open `script.js` in any text editor (even Notepad/TextEdit works, or you
   can edit it right on GitHub later).
5. Find this line near the top:
   ```
   const PASSWORD_HASH = "REPLACE_WITH_YOUR_HASH_FROM_change-password.html";
   ```
6. Replace the text between the quotes with the code you copied. Save.

That's it — your real password is never stored anywhere in the files,
just the scrambled version.

**Worth knowing:** this keeps casual visitors and search engines out, which
is what you're going for, but it isn't bulletproof — there's no real
"server" checking the password, just code running in the visitor's browser.
Don't use it to protect anything truly sensitive.

---

## 2. Put it on GitHub Pages

1. Go to [github.com](https://github.com) and create a free account if you
   don't have one.
2. Click the **+** in the top right → **New repository**.
3. Name it something like `my-updates` (the name doesn't matter much).
   Keep it set to **Public** (GitHub Pages requires this on free accounts).
   Click **Create repository**.
4. On the new repo page, click **uploading an existing file**.
5. Drag in all five files: `index.html`, `style.css`, `script.js`,
   `change-password.html`, and this `README.md`. Click **Commit changes**.
6. Go to the repo's **Settings** tab → **Pages** (in the left sidebar).
7. Under "Branch," choose `main` and `/ (root)`, then click **Save**.
8. Wait about a minute, refresh the page, and you'll see a link like
   `https://yourusername.github.io/my-updates` — that's your live site!

Send that link to friends along with the password.

---

## 3. Customize it

### Colors and fonts
Open `style.css` — the very first section (`:root { ... }`) has all the
colors and fonts in one place with comments explaining each one. Change a
value, save, re-upload to GitHub, and the whole site updates.

The site currently uses EB Garamond (a digital Garamond) for headings and
body text, and IBM Plex Mono for the little date "stamps." If you ever
want to swap fonts again, you'll need to update two things together: the
Google Fonts link near the top of `index.html` (and `change-password.html`
if you want them to match) and the `--font-display` / `--font-body`
variables in `style.css`.

### Site name and tagline
Open `index.html` and look for `<a href="#" class="site-name">Skylar</a>`
near the top, and the `<h1>` and tagline just below it in the hero section.

### Adding a Life Update
In `index.html`, find the `SECTION 1: LIFE UPDATES` comment. Copy one
entire block that looks like this:
```html
<div class="entry">
  <div class="entry-meta"><span class="stamp">JUN 2026</span></div>
  <div>
    <h3>graduated! now what</h3>
    <p>Your text here.</p>
  </div>
</div>
```
Paste a copy right above the others (newest entries go at the top), then
change the date, title, and text.

### Adding a book or piece of writing
Same idea, in the `SECTION 2: READING & WRITING` part — copy a `book` or
`writing-piece` block and edit the text.

### Adding a trip
Same idea, in the `SECTION 3: TRAVELS` part — copy a `travel-card` block
and edit the place name and description.

### Editing directly on GitHub (no download needed)
Once your files are uploaded, you can click any file in your repo, then
click the pencil icon (top right) to edit it right in the browser, and
click **Commit changes** to save. Your live site updates within a minute
or two.

---

## 4. Updating your password later

Just repeat Step 1 with a new password, then re-upload the updated
`script.js` to GitHub (or edit it directly there with the pencil icon).
