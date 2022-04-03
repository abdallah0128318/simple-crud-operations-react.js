import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const deleteBlog = ()=>{
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/')
        });
    }
    
    return ( 
        <div className="blog-details" id={id}>
            { error &&  <div>Error: {error}</div> }
            { isPending &&  <div>Loading......</div> }
            { blog &&  <article>
                <h2>{blog.title}</h2>
                <p><i>Written By:</i> {blog.author}</p>
                <p id="post_body">{blog.body}</p>
                <button onClick={deleteBlog} >delete</button>
            </article> }
        </div>
     );
}
 
export default BlogDetails;