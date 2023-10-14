import { api } from '../config';

export default class Client {
    fetchMethods = {
        get: 'GET',
        post: 'POST',
        patch: 'PATCH',
        delete: 'DELETE'
    }
    
    fetchOptions(method, body = null) {
        const headers = new Headers();
        
        headers.append("Accept", "Bearer application/json");
        headers.append("Content-Type", "application/json");

        if(body) {
            return {
                method,
                headers,
                body: JSON.stringify(body)
            };
        }

        return {
            method,
            headers
        }   
    }

    // Configuration

    async configuration() {
        const requestOptions = this.fetchOptions(this.fetchMethods.get);
        const configuration = await fetch(`${api}/configuration`, requestOptions);
        const res = await configuration.json();
        return res;
    }

    // Messages

    async postMessage(data) {
        const requestOptions = this.fetchOptions(this.fetchMethods.post, data);
        const message = await fetch(`${api}/contact`, requestOptions);
        const res = await message.json();
        return res;
    }

    // Metrics

    async addView() {
        const requestOptions = this.fetchOptions(this.fetchMethods.patch);
        const account = await fetch(`${api}/visits`, requestOptions);
        const res = await account.json();

        return res;
    }

    // Reels

    async getReels() {
        const requestOptions = this.fetchOptions(this.fetchMethods.get);
        const welcomeImage = await fetch(`${api}/reels`, requestOptions);
        const res = await welcomeImage.json();
        return res;
    }

    async getVideoReels() {
        const requestOptions = this.fetchOptions(this.fetchMethods.get);
        const welcomeImage = await fetch(`${api}/reels/video`, requestOptions);
        const res = await welcomeImage.json();
        return res;
    }

    async streamVideoById(id) {
        const requestOptions = this.fetchOptions(this.fetchMethods.get);
        const welcomeImage = await fetch(`${api}/reels/video/${id}`, requestOptions);
        const res = await welcomeImage.json();
        return res;
    }

    // Sections

    async getAboutSection() {
        const requestOptions = this.fetchOptions(this.fetchMethods.get);
        const welcomeContent = await fetch(`${api}/sections/about`, requestOptions);
        const res = await welcomeContent.json();
        return res;
    }

    async getWelcomeSection() {
        const requestOptions = this.fetchOptions(this.fetchMethods.get);
        const welcomeContent = await fetch(`${api}/sections/welcome`, requestOptions);
        const res = await welcomeContent.json();
        return res;
    }

    // Testimonials

    async getTestimonials() {
        const requestOptions = this.fetchOptions(this.fetchMethods.get);
        const welcomeImage = await fetch(`${api}/testimonials`, requestOptions);
        const res = await welcomeImage.json();
        return res;
    }
}