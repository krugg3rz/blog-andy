class BlogPost {
    title: string;
    content: string;

    public constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    getBlog() {
        return this.title + " " + this.content;
    }
}

let blogTitles: BlogPost[] = [];

const createBlogPost = () => {
    let form = document.getElementById("blog-form");
    let title = form["blog-title"].value;
    let content = form["blog-post"].value;
    blogTitles.push(new BlogPost(title, content));
    populateBlogPosts();
}

const printBlogPost = (blogPost: BlogPost) => {
    document.getElementById("blog-output").innerHTML += "<p>" + blogPost.title + "</p>";
}

const populateBlogPosts = () => {
    document.getElementById("blog-output").innerHTML = ""
    blogTitles.forEach(printBlogPost);
}