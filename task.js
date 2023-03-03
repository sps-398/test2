const posts = [];
const user = {
    name: 'Shashank',
    lastActivityTime: Date.now()
};

const activity = async () => {
    const createPost = (post) => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve(post);
        }, 1000);
    });
};

const updateLastUserActivityTime = new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = Date.now()
            resolve(user.lastActivityTime);
        }, 1000);
    });

    try {
        let values = await Promise.all([createPost({ title: 'Post1' }), createPost({ title: 'Post2' }), createPost({ title: 'Post3' }),
                                         createPost({ title: 'Post4' }), updateLastUserActivityTime]);
        values.forEach(value => console.log(value));
    } catch(err) {
        console.log(err);
    }
}

const deletePost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length !=0 ) {
                posts.pop();
                resolve();
            }
            else
                reject('Error: Array is Empty');
        }, 1000);
    });
}

activity()
    .then(() => {
        deletePost()
            .then(() => {
                posts.forEach((post) => console.log(post));
            })
            .catch(err => console.log(err));
    });



