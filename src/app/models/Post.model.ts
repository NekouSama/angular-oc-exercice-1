export class Post {
    loveIts: number
    createdAt: Date;
    constructor(public title: string,
                public content: string) {
        this.createdAt = new Date();
        this.loveIts = 0;
    }
}