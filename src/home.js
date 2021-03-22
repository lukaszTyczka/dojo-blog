import { useState, useEffect } from 'react';
import BlogList from './blogList';
import useFetch from './useFetch';
// npx json-server --watch data/db.json --port 8000   -> set json-server
const Home = () => {
    const { data: blogs, isPending, error } = useFetch(
        'http://localhost:8000/blogs'
    );
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
    );
};

export default Home;
