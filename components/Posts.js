import Post from './Post';

const posts = [
    {
        id: '123',
        username: 'Eric7398',
        userImg: 'https://avatars.githubusercontent.com/u/72224088?v=4',
        img: 'https://avatars.githubusercontent.com/u/72224088?v=4',
        caption: 'this is dope!',
    },
    {
        id: '123',
        username: 'Eric7398',
        userImg: 'https://avatars.githubusercontent.com/u/72224088?v=4',
        img: 'https://avatars.githubusercontent.com/u/72224088?v=4',
        caption: 'this is dope!',
    },
    {
        id: '123',
        username: 'Eric7398',
        userImg: 'https://avatars.githubusercontent.com/u/72224088?v=4',
        img: 'https://avatars.githubusercontent.com/u/72224088?v=4',
        caption: 'this is dope!',
    },
    {
        id: '123',
        username: 'Eric7398',
        userImg: 'https://avatars.githubusercontent.com/u/72224088?v=4',
        img: 'https://avatars.githubusercontent.com/u/72224088?v=4',
        caption: 'this is dope!',
    },
];

function Posts() {
    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}


        </div>
    )
}

export default Posts
