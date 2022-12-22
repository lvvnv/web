let posts = []
function addPost(post) {
    posts.push(post);
    showPost(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPosts() {
    posts = JSON.parse(localStorage.getItem('posts'));
    if (posts != null) {
        posts.forEach(post => showPost(post));
    } else {
        posts = [];
    }
}

function showPost(post) {
    let all_posts = document.querySelector(".all_posts");
    let newPost = `
    <section class='post_content'>
    <h2>${post.name}</h2>
    <p>${post.text}</p>
    </section>
    `;
    all_posts.insertAdjacentHTML('afterbegin', newPost);
}

function handleForm() {
    let formElement = document.querySelector('.new_post');
    formElement.addEventListener('submit', e => {
        e.preventDefault();

        let name = document.getElementById('post-name').value;
        let text = document.getElementById('post-text').value;


        let post = {
            'name' : name,
            'text' : text
        };

        document.getElementById('post-name').value = '';
        document.getElementById('post-text').value = '';

        addPost(post);

    })
}

function deletePosts() {
    posts = [];
    localStorage.setItem('posts', null);
    let all_posts = document.querySelector(".all_posts");
    all_posts.innerHTML = '';
}


document.addEventListener('DOMContentLoaded', handleForm);
document.addEventListener('DOMContentLoaded', loadPosts);