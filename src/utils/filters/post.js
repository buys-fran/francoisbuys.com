// Add post blurb filter to nonjucks
// A blurb profide a short intro to a post.
// The blurb length defaults to 200 characters
// {{ text | postBlurb(OPTIONAL LENGTH) }}
// Inspired by: https://github.com/5t3ph/11ty-rocks/blob/main/.eleventy.js

module.exports = (post, length = 200) => {
  const content = post.replace(/(<([^>]+)>|\r?\n|\r)/gi, ' ')
  return content.substr(0, content.lastIndexOf(' ', length)) + '...'
}
