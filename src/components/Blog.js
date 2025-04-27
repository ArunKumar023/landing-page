import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    { category: 'RESOURCES', title: 'Refreshing Designs', desc: 'Quench satisfying designs to help you stir up emotion and tell a story.', img: 'https://placehold.co/300x400?text=Design', bgColor: '#8B5CF6' },
    { category: 'LIFESTYLE', title: 'Healthier Lifestyle', desc: 'Living a healthier lifestyle will help with your productivity and your mind-set.', img: 'https://placehold.co/300x400?text=Lifestyle', bgColor: '#60A5FA' },
    { category: 'ENTERTAINMENT', title: 'Gaming Evolution', desc: 'Learn about the evolution of gaming and how it started a revolution.', img: 'https://placehold.co/300x400?text=Gaming', bgColor: '#FBBF24' },
    { category: 'INSPIRATION', title: 'Best Workstations of the Year', desc: 'Check out these inspiring workstations to get ideas on how to level-up your workstation.', img: 'https://placehold.co/300x400?text=Workstation', bgColor: '#fff' },
    { category: 'FOOD', title: 'Eating for Productivity', desc: 'Learn how to be more disciplined in your diet and how you can eat to maximize productivity.', img: 'https://placehold.co/300x400?text=Productivity', bgColor: '#fff' },
    { category: 'RESOURCES', title: 'A Design Mind-set', desc: 'What does it mean to have a design mind-set? Learn how to improve your eye for design.', img: 'https://placehold.co/300x400?text=Design+Mindset', bgColor: '#fff' },
  ];

  return (
    <section className="blog">
      <div className="blog-header">
        <div className="blog-text">
          <h2>The Project Blog</h2>
          <p>Designs and layouts to help you with your app.</p>
        </div>
      </div>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className={`blog-post hover-scale ${index < 3 ? 'large-post' : ''}`}>
            <div className="image-wrapper" style={{ backgroundColor: post.bgColor }}>
              <img src={post.img} alt={post.title} />
            </div>
            <span className="category-label">{post.category}</span>
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;