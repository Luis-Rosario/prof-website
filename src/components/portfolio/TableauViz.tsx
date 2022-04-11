/*import TableauReport from 'tableau-react';*/
import React ,{useRef, useEffect} from 'react';

declare global {
    interface Window {
        tableau:any;
    }
}


const { tableau } = window;

function TableauViz( props: { id:string}){
    const ref = useRef(null);
    const url='https://public.tableau.com/views/F1dataanalysisanhistoricaloverview/Alldash'
    
    const initViz = () => {
    
            new tableau.Viz(ref.current, url, {
              
            })
    }

    useEffect(initViz ,[]);
    
    return(

        <div ref={ref} />

    )


}

export default TableauViz;