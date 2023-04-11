import React from 'react';
import '../styles/index.css';
function Blog() {

  return (
    <main>
      <h2>Saved topics</h2>
      <section className="topics">
        <mark>4.11.23</mark>
        <h3>Save bookmarks, save time</h3>
        <p className="blogs"><b>I</b>f you're like me, stuying code may often bring about several tabs.
          Perhaps, you want to use pieces here and there. However, with more open tabs, the false sense
          to quickly find answers could become more desirable. While it may be a simple task, categorized
          bookmarks could help reduce the flaws of solution scanning, and instead allow you to better
          review any new material. This not only declutters what's in front of you, but promotes the focus
          of reading to understand.</p>
      </section>
    </main>
  );
}

export default Blog;