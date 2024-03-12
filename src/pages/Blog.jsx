import { Link, useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch'
import { useEffect } from 'react';

const Blog = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  //  useEffect(() => {
  //    console.log(searchParams);
  //  }, [searchParams]);



  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleChange = (e) => {
    setSearchParams({ filter: e.target.value })
  }

  return (
    <>
      <div>Blog</div>
      <input type='text' onChange={handleChange} value={searchParams.get("filter") || ""} className='form-control my-3' />
      <ul className='list-group'>

        {
          data.filter((post) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = post.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          }).map((post) => (<Link to={`/blog/${post.id}`} key={post.id} className='list-group-item'>{post.id} - {post.title}</Link>))}
      </ul>
    </>
  )
}

export default Blog
