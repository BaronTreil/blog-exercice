export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;
    id: number;

    constructor(title, content, initialLike) {
        this.id = Date.now();
        this.title = title;
        this.content = content;
        this.loveIts = initialLike;
        this.created_at = new Date();
    }
}