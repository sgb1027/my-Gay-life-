/* =====================================================================
   SCRIPT.JS
   ---------------------------------------------------------------------
   This handles the password gate. The password itself is NOT stored
   here in plain text — instead a "hash" of it is stored, which is a
   scrambled fingerprint that can't easily be reversed back into the
   real password just by looking at it.

   TO SET OR CHANGE YOUR PASSWORD:
   1. Open change-password.html in your browser (just double-click it,
      no internet needed).
   2. Type your new password and click "Generate".
   3. Copy the long code it gives you.
   4. Paste it below, replacing the text inside the quotes for
      PASSWORD_HASH.
   5. Save this file and re-upload it to GitHub.

   A NOTE ON SECURITY:
   This keeps casual visitors and search engines out, which is what
   you asked for. It is NOT bulletproof — a determined, technical
   person could find a way around it, since this is a static website
   with no real server behind it. Don't use this to protect anything
   truly sensitive.
   ===================================================================== */

const PASSWORD_HASH = "5311fde0181cf25deb2df5472a236df2f270d1238a448e7f049632d44bc49ac7";

// How long to stay logged in on this device before asking again.
// This is in hours. Change the number if you'd like.
const SESSION_HOURS = 24 * 30; // about a month


// ---- you shouldn't need to touch anything below this line ----

async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

function showSite() {
  document.getElementById("lock-screen").style.display = "none";
  document.getElementById("site").style.display = "block";
}

function rememberLogin() {
  const expires = Date.now() + SESSION_HOURS * 60 * 60 * 1000;
  localStorage.setItem("site_unlocked_until", String(expires));
}

function isRemembered() {
  const until = Number(localStorage.getItem("site_unlocked_until") || 0);
  return Date.now() < until;
}

// If already unlocked on this device, skip the lock screen.
if (isRemembered()) {
  showSite();
}

document.getElementById("lock-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = document.getElementById("lock-input").value;
  const errorEl = document.getElementById("lock-error");
  const enteredHash = await sha256(input);

  if (enteredHash === PASSWORD_HASH) {
    errorEl.textContent = "";
    rememberLogin();
    showSite();
  } else {
    errorEl.textContent = "that's not it — try again";
    document.getElementById("lock-input").value = "";
    document.getElementById("lock-input").focus();
  }
});
