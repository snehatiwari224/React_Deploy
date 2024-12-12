import React from 'react';
import './Blog.css';

function Blog() {
    const blogPosts = [
        {
            id: 1,
            title: 'The Future of Technology',
            imageUrl: 'https://via.placeholder.com/600x300',
            description: 'Explore the latest trends and predictions shaping the future of technology.',
        },
        {
            id: 2,
            title: '10 Tips for a Healthier Lifestyle',
            imageUrl: 'https://via.placeholder.com/600x300',
            description: 'Adopt these 10 simple habits to improve your health and well-being.',
        },
        {
            id: 3,
            title: 'Traveling the World on a Budget',
            imageUrl: 'https://via.placeholder.com/600x300',
            description: 'Discover how to explore the globe without breaking the bank.',
        },
    ];

    return (
        <div className="blog-container">
            <h2>Our Blog</h2>
            <div className="blog-posts">
                {blogPosts.map((post) => (
                    <div key={post.id} className="blog-post">
                        <img src={post.imageUrl} alt={post.title} className="blog-image" />
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <button className="read-more-button">Read More</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
