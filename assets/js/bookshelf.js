/* Tidewritten Personal Bookshelf — versioned, browser-local storage. */
(() => {
  "use strict";
  const KEY = "tidewritten-personal-bookshelf-v1";
  const STATUSES = ["want-to-read", "currently-reading", "completed"];
  const LABELS = {
    "want-to-read": "Want to Read",
    "currently-reading": "Currently Reading",
    "completed": "Completed"
  };
  let cache = null;
  let writable = true;

  const empty = () => ({ version: 1, books: {} });
  const validRecord = value => value && typeof value === "object"
    && (value.status === null || STATUSES.includes(value.status))
    && typeof value.favorite === "boolean";
  const load = () => {
    if (cache) return cache;
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return (cache = empty());
      const parsed = JSON.parse(raw);
      if (!parsed || parsed.version !== 1 || !parsed.books || typeof parsed.books !== "object" || Array.isArray(parsed.books)) {
        writable = false;
        return (cache = empty());
      }
      const books = {};
      for (const [path, record] of Object.entries(parsed.books)) {
        if (typeof path !== "string" || !path.startsWith("/") || !validRecord(record)) {
          writable = false;
          return (cache = empty());
        }
        books[path] = { status: record.status || null, favorite: record.favorite, updatedAt: Number(record.updatedAt) || 0 };
      }
      return (cache = { version: 1, books });
    } catch (error) {
      writable = false;
      return (cache = empty());
    }
  };
  const get = path => load().books[path] || { status: null, favorite: false, updatedAt: 0 };
  const save = () => {
    if (!writable) return false;
    try { localStorage.setItem(KEY, JSON.stringify(load())); return true; }
    catch (error) { writable = false; return false; }
  };
  const update = (path, changes) => {
    if (typeof path !== "string" || !path.startsWith("/") || !writable) return false;
    const current = get(path);
    load().books[path] = { ...current, ...changes, updatedAt: Date.now() };
    if (!save()) {
      if (current.status || current.favorite || current.updatedAt) load().books[path] = current;
      else delete load().books[path];
      return false;
    }
    document.dispatchEvent(new CustomEvent("tidewritten:bookshelf-change", { detail: { path } }));
    return true;
  };
  const setStatus = (path, status) => update(path, { status: STATUSES.includes(status) ? status : null });
  const toggleFavorite = path => update(path, { favorite: !get(path).favorite });
  const list = () => Object.entries(load().books).map(([path, record]) => ({ path, ...record }));
  const summary = paths => {
    const records = paths.map(get);
    const counts = { "want-to-read": 0, "currently-reading": 0, completed: 0 };
    records.forEach(record => { if (record.status) counts[record.status]++; });
    return { counts, favorites: records.filter(record => record.favorite).length, total: records.length };
  };
  const statusLabel = status => LABELS[status] || "Not started";
  const makeStatusControl = (path, bookTitle = "") => {
    const label = document.createElement("label");
    label.className = "bookshelf-status-control";
    const caption = document.createElement("span");
    caption.textContent = "Reading status";
    const select = document.createElement("select");
    select.setAttribute("aria-label", bookTitle ? "Reading status for " + bookTitle : "Reading status");
    [["", "Not started"], ...STATUSES.map(status => [status, LABELS[status]])].forEach(([value, text]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = text;
      select.append(option);
    });
    select.value = get(path).status || "";
    select.addEventListener("change", () => {
      if (!setStatus(path, select.value)) select.value = get(path).status || "";
    });
    label.append(caption, select);
    return label;
  };
  const makeFavoriteButton = path => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "bookshelf-favorite";
    const paint = () => {
      const active = get(path).favorite;
      button.textContent = active ? "★ Favorited" : "☆ Add to favorites";
      button.setAttribute("aria-pressed", String(active));
    };
    button.addEventListener("click", () => { toggleFavorite(path); paint(); });
    paint();
    return button;
  };
  const api = { key: KEY, statuses: STATUSES, labels: LABELS, get, list, setStatus, toggleFavorite, summary, statusLabel, makeStatusControl, makeFavoriteButton, get writable() { load(); return writable; } };
  window.TidewrittenBookshelf = api;

  document.addEventListener("tidewritten:bookshelf-change", () => {
    document.querySelectorAll("[data-bookshelf-path]").forEach(node => {
      const record = get(node.dataset.bookshelfPath);
      const status = node.querySelector("[data-bookshelf-status-label]");
      const favorite = node.querySelector("[data-bookshelf-favorite-label]");
      if (status) status.textContent = statusLabel(record.status);
      if (favorite) favorite.textContent = record.favorite ? "Favorite" : "";
    });
  });
})();