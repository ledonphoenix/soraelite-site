// The Sora Élite site is offline. This Worker serves nothing and has no files attached.
// The last live version is kept on the branch "archive-site-final-2026-11-05".
export default {
  async fetch() {
    return new Response('Not found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' }
    });
  }
};
