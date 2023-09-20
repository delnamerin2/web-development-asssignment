//Define a class for blog posts
class BlogPost {
    constructor(name, email, title, content) {
        this.name = name;
        this.email = email;
        this.title = title;
        this.content = content;
        this.timestamp = new Date();
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const blogForm = document.getElementById('formBlog');
    const blogPosts = document.getElementById('blogPosts');

    // Initialize Summernote
    $('.summernote').summernote();

    // Array to store blog posts
    const posts = [];

    // Function to add a new blog post
    function addBlogPost(post) {
        posts.push(post);
        displayBlogPosts();
    }
    // Function to display all blog posts
    function displayBlogPosts() {
        blogPosts.innerHTML = '';
        const reversedpost=posts.slice().reverse();

        for (const post of reversedpost) {
            const postElement = document.createElement('div');
            postElement.classList.add('border', 'p-3', 'mb-3');

            postElement.innerHTML = `
                <h4>${post.title}</h4>
                <div>${post.content}</div>
                <p><strong>Author:</strong> ${post.name}</p>
                <p><strong>Email:</strong> ${post.email}</p>
                <p><strong>Date:</strong> ${post.timestamp.toLocaleString()}</p>
            `;
            blogPosts.appendChild(postElement);
        }
    }

    // Event listener for form submission
    blogForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const title = document.getElementById('title').value;
        const content = $('.summernote').summernote('code'); // Get Summernote content

        const newPost = new BlogPost(name, email, title, content);
        addBlogPost(newPost);
        // Clear form fields and Summernote content
        blogForm.reset();
        $('.summernote').summernote('code', ''); // Clear Summernote
    });
});