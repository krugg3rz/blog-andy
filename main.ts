var date = new Date();

class BlogPost {
    title: string;
    content: string;
    private _date: string;

    public constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
        this._date = date.toLocaleDateString();
    }

    get date(){
        return this._date;
    };
}

let blogTitles: BlogPost[] = [];

const createBlogPost = () => {
    let currentTime = new Date();
    let form = document.getElementById("blog-form");
    let title = form["blog-title"].value;
    let content = form["blog-post"].value;
    blogTitles.push(new BlogPost(title, content));
    populateBlogPosts();
}

const printBlogPost = (blogPost: BlogPost) => {
    document.getElementById("blog-output").innerHTML += "<h2>" + blogPost.title + "</h2>";
    document.getElementById("blog-output").innerHTML += "<h4>" + blogPost.content + "</h4>";
    document.getElementById("blog-output").innerHTML += "<h5>" + blogPost.date + "</h5>" + "-------";
}

const populateBlogPosts = () => {
    document.getElementById("blog-output").innerHTML = ""
    blogTitles.forEach(printBlogPost);
}