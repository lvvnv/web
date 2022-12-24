let posts = []

function createPost(post) {
   return `
   <section class='content__section_post'>
       <h2>${post.title}</h2>
       <p>${post.body}</p>
   </div>
`
}

function fillPostsList(posts) {
    let pl = document.querySelector('.content__section_generated');
    if (posts.length > 0) {
        posts.forEach((post) => {
            pl.innerHTML += createPost(post);
        });
    }
}

function getRandomNum() {
    let num = Math.floor(Math.random() * 3) + 3;
    console.log(num);
    return num;
}

function getPostRequest() {
    let userNum = Math.floor(Math.random() * 10) + 1;
    return fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userNum, {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((res) => {
            if (res.status < 100 * getRandomNum()) {
                return res;
            }
            throw new Error(res.statusText);
        })
        .then((res) => res.json())
        .then((new_posts) =>  {
            posts = posts.concat(new_posts);
            document.querySelector(".content__image_preloader").style.display = "none";
        })
        .catch(function (error) {
            document.querySelector(".content__image_preloader").style.display = "none";
            document.querySelector(".content__text_error").style.display = "contents";
            console.log(error);
        })
}

window.addEventListener("load", async () => {
    await getPostRequest();
    fillPostsList(posts);
})