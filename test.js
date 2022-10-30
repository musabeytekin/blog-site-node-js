post1 = {title: "title 1", post: "post 1"};
post2 = {title: "title 2", post: "post 2"};

posts = [];

posts.push(post1);
posts.push(post2);

// console.log(posts);

function titleOf(post){
    const {title} = post;
    return {title}.title;
}

const titles = posts.map(titleOf);

// console.log(titles);

posts.forEach(element => {
    console.log(element.title);
});

