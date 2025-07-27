import React from 'react';
import './Blog.css';

const Blog = () => (
  <section className="blog-section">
    <h2>Blog & Articles</h2>
    <ul>
      <li>
        <a href="https://medium.com/@rocksononchoka/linux-forensics-tips" target="_blank" rel="noopener noreferrer">
          Linux Forensics Tips
        </a>
      </li>
      <li>
        <a href="https://rocksononchoka.hashnode.dev/cybersecurity-basics" target="_blank" rel="noopener noreferrer">
          Cybersecurity Basics
        </a>
      </li>
    </ul>
  </section>
);

export default Blog;