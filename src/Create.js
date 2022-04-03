import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIspending] = useState(false);
    const history = useHistory();

   const handleSubmit = (e)=>{
       e.preventDefault();
       const blog = {title, body, author};
       setIspending(true);
       fetch('http://localhost:8000/blogs', {
           method: 'POST',
           headers: {'Content-Type': 'application/Json'},
           body: JSON.stringify(blog)
       }).then(()=>{ 
           setIspending(false);
           history.push('/');
        });
   }

    return (
        <div className="create">
            <h2>Create a new blog</h2>
           <form onSubmit={handleSubmit}>
            <label>blog title:</label>
                <input 
                type="text"
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                required
                />
                <label>blog body</label>
                <textarea
                rows="5"
                value={body}
                onChange={(e)=>{setBody(e.target.value)}}
                required
                >
                </textarea>
                <select
                value={author}
                onChange={(e)=>{setAuthor(e.target.value)}}
                >
                    <option value="mario">mario</option>
                    <option value="Youshi">Youshi</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button>Adding Blog.........</button>}
           </form>

        </div>

        
    );
}
 
export default Create;