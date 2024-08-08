import React from 'react';
import "./SearchResultsList.css";
import { SearchResult } from './Searchresult';
export const SearchResultsList=({results})=>{
return <div className="results-list">
    {
        results.map((result,id)=>{
         // return <div key={id}>{result.name}</div>
         return <SearchResult result={result}key={id}/>
        })
    }
</div>;
};