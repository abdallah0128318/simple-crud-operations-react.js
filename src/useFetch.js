import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";


const useFetch = (url)=>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const history = useHistory();

    useEffect(()=>{
        const abortObj = new AbortController();
        setTimeout(()=>{
            fetch(url, {signal: abortObj.signal})
        .then(res => {
            if(!res.ok)
            {
                throw Error('Can`t fetch the data from this resource');
            }
            return res.json();
        })
        .then(data => {
            setError(null);
            setData(data);
            setIsPending(false);
        })
        .catch(err=>{
            if(err.name === 'AbortError')
            {
                console.log('Fetch aborted');
            }
            else
            {
                setIsPending(false);
                setError(err.message); 
            }
            
        });
        }, 1000);

        return  ()=> abortObj.abort();



    }, [url]);

    return {data, isPending, error};

}


export default useFetch;