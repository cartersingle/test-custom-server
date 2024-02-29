type TPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const Page = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-cache",
  }).then((res) => {
    console.log("fetched");
    return res.json();
  });

  return (
    <div>
      {posts.map((post: TPost) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
};

export default Page;
