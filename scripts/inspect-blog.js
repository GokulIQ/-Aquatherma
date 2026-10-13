const fs = require('fs');
const code = fs.readFileSync('assets/js/data.js', 'utf8');
const blogPostsMatch = code.match(/window\.BLOG_POSTS\s*=\s*(\[[\s\S]*?\]);/);
if (blogPostsMatch) {
  // eval or inspect
  const post = eval(blogPostsMatch[1]).find(p => p.id === 'tank-vs-tankless-water-heaters');
  if (post) {
    console.log('Post title:', post.title);
    if (post.content.includes('<table')) {
      console.log('Post contains <table>!');
      const tableMatch = post.content.match(/<table[\s\S]*?<\/table>/);
      if (tableMatch) console.log(tableMatch[0].substring(0, 300));
    }
    // check words longer than 25 chars
    const words = post.content.replace(/<[^>]+>/g, ' ').split(/\s+/);
    const longWords = words.filter(w => w.length > 25);
    console.log('Long words:', longWords);
  }
}
