import { useState } from "react";
import fetchData from "./useFetch";
import Rows from "./rows";
import Thead from "./thead";

function Table() {

    const dataObj = fetchData("https://api.coincap.io/v2/assets");
    const [visRows, setVisRow] = useState(50);

    function loadMore(){
        if(visRows<dataObj.data.length){
            setVisRow(visRows+50);
        }
    }


    if (!dataObj) return <div></div>;
    return (
        <>
        <table>
            <Thead/>
            <tbody className="Content">
                {
                    dataObj.data.slice(0, visRows).map((item,index) => (
                        <Rows item={item} index={index} />
                    ))
                }
            </tbody>
        </table>
        <div></div>
        <button id="loadMore" onClick={loadMore}>Load More</button>
        </>
    );
}
export default Table;