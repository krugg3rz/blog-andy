class BlogPost {
    title: string;
    content: string;
<<<<<<< HEAD
    private _date: Date;
=======
>>>>>>> 426ceb8d88e82bf0a94979929f59e7d9bbe566b8

    public constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
<<<<<<< HEAD
        this._date = new Date();
    }

    get date(){
        return this._date;
    };
=======
    }

    getBlog() {
        return this.title + " " + this.content;
    }
>>>>>>> 426ceb8d88e82bf0a94979929f59e7d9bbe566b8
}

let blogTitles: BlogPost[] = [];

const createBlogPost = () => {
<<<<<<< HEAD
    let currentTime = new Date();
=======
>>>>>>> 426ceb8d88e82bf0a94979929f59e7d9bbe566b8
    let form = document.getElementById("blog-form");
    let title = form["blog-title"].value;
    let content = form["blog-post"].value;
    blogTitles.push(new BlogPost(title, content));
    populateBlogPosts();
}

const printBlogPost = (blogPost: BlogPost) => {
<<<<<<< HEAD
    document.getElementById("blog-output").innerHTML += "<h2>" + blogPost.title + "</h2>";
    document.getElementById("blog-output").innerHTML += "<h4>" + blogPost.content + "</h4>";
    document.getElementById("blog-output").innerHTML += "<h5>" + blogPost.date + "</h5>" + "-------";
=======
    document.getElementById("blog-output").innerHTML += "<p>" + blogPost.title + "</p>";
>>>>>>> 426ceb8d88e82bf0a94979929f59e7d9bbe566b8
}

const populateBlogPosts = () => {
    document.getElementById("blog-output").innerHTML = ""
    blogTitles.forEach(printBlogPost);
}