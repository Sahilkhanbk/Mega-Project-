
import configure from "../configure/configure";
import { Client, Databases, Storage, Query, ID } from 'appwrite'

export class Service {
    Client = new Client();
    Databases;
    bucket;

    constructor() {
        this.Client
            .setEndpoint(configure.appwriteUrl)
            .setProject(configure.appwriteProjectID);
        this.Databases = new Databases(this.Client);
        this.bucket = new Storage(this.Client);
    };

    async createPost({ title, content, featuredImage, slug, status, userId, }) {
        try {
            return await this.Databases.createDocument(
                configure.appwriteDatabaseID,
                configure.appwriteCollectionID,
                slug,
                {
                    title,
                    featuredImage,
                    content,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log(console.error)
        }
    }
    

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.Databases.updateDocument(
                configure.appwriteDatabaseID,
                configure.appwriteCollectionID,
                slig,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log(error);
        }
    }
    

    async deletePost({ slug }) {
        try {
            await this.Databases.deleteDocument(
                configure.appwriteDatabaseID,
                configure.appwriteCollectionID,
                slug
            )
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.Databases.getDocument(
                configure.appwriteDatabaseID,
                configure.appwriteCollectionID,
                slug
            )
        } catch (error) {
            console.log(error)
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.Databases.listDocuments(
                configure.appwriteDatabaseID,
                configure.appwriteCollectionID,
                queries,

            )
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                configure.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async deleteFile(fileID) {
        try {
            await this.bucket.deleteFile(
                configure.appwriteBucketID,
                fileID
            )
            return true
        } catch (error) {
            console.log(error);
            return false

        }
    }

    getFilePreview(fileID) {
        return this.bucket.getFilePreview(
            configure.appwriteBucketID,
            fileID
        )
    }
}


const authService = new Service();


export default authService


