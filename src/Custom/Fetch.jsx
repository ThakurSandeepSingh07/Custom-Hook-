import { useEffect, useState } from "react"

export const use_fetch=(url)=>{
    const [data, setData] = useState([])
    // const [error, setError] = useState(null)
    useEffect(()=>{
    //     async function fetchData(){
    //         try {
    //           const response = await fetch(url);
    //           const result = await response.json();
    //           setData(result);
    //         }
    //          catch (error) {
    //           console.error("Error fetching data:", error);
    //         }
    //       };
    //    // Call the fetchData function
    //    fetchData();

        // fetch(url)
        // .then(response=>response.json())
        // .then(ele => setData(ele))

       (async function(){
            try{
                const response = await fetch(url)
                const ele = await response.json()
                if(response.ok === false){
                    throw new Error("error found")
                }
            setData(ele)
            }
            catch(error){
                setError(error)
                }
            
        })();
    
        // async function fetchData(){
        //     try{
        //         const response = await fetch(url)
        //         const ele = await response.json()
        //         if(response.ok === false){
        //             throw new Error("error found")
        //         }
        //     setData(ele)
        //     }
        //     catch(error){
        //         setError(error)
        //         }
            
        // }
        // fetchData();
       
    },[])
    return {data}
    
}
