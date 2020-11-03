const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsTable = document.getElementById('posts_table');


function getData(url) {
    return fetch(url)
        .then(result => result.json())
}

async function showUserData(event) {
    let target = event.target;
    if (target.className !== 'user_link') return;

    if (target.status === 'opened') return;

    let users = await getData(usersUrl);

    users.forEach(user => {
        if (user.id == target.id) {
            let row = document.createElement('tr');
            row.innerHTML = `<td colspan=3>
            <b>Name:</b> ${user.name} <b>Username:</b> ${user.username} <b>Email:</b> ${user.email}
            </td>`;
            row.style.textAlign = 'center';
            target.parentElement.after(row);
            target.status = 'opened';
        }
    })
}

async function showPosts() {
    let posts = await getData(postsUrl);

    let id = 1;
    while (id <= 10) {
        posts.forEach(post => {
            if (post.userId == id) {
                let row = document.createElement('tr');
                row.innerHTML = `
            <td class="user_link" id="${id}">User№${post.userId}</td>
            <td><b>Title:</b><br>${post.title}</td>
            <td><b>Body:</b><br>${post.body}</td>`;
                postsTable.append(row);
                id++;
            }
        });
    }
}

showPosts();

postsTable.addEventListener('click', showUserData)