// https://jsonplaceholder.typicode.com/posts

export async function getPosts() {
  try {
    let postData = await fetch('https://jsonplaceholder.typicode.com/posts');
    let post = await postData.json();
    return post;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getAllPostIds() {
  const posts = await getPosts();
  return posts.slice(0, 20).map((post) => ({ params: { id: `${post.id}` } }));
}

export async function getPostData(id) {
  //https://jsonplaceholder.typicode.com/posts/1
  try {
    let postData = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    let post = await postData.json();
    return post;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
