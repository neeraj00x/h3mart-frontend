import Avatar from "./avatar";

function Rows(props) {

    return (
        <tr key={props.index} className="row">
            <td className="center-aligned">{props.item.rank}</td>
            <td className="left-aligned">
                <Avatar symbol={props.item.symbol} />
                <div className="coinDetails">
                    {props.item.name}
                    <p style= {{fontSize:"0.8em", opacity: "0.7"}}>{props.item.symbol}</p>
                </div>
            </td>
            <td className="right-aligned">{'$' + parseFloat(props.item.priceUsd).toFixed(2)}</td>
            <td className="right-aligned">{'$' + parseFloat((props.item.marketCapUsd)/1000000000).toFixed(2) + 'b'}</td>
            <td className="right-aligned">{'$' + parseFloat(props.item.vwap24Hr).toFixed(2)}</td>
            <td className="right-aligned">{parseFloat((props.item.supply)/1000000).toFixed(2) + 'm'}</td>
            <td className="right-aligned">{'$' + parseFloat((props.item.volumeUsd24Hr)/1000000000).toFixed(2) + 'b'}</td>
            <td className="right-aligned" style={{ color: ((props.item.changePercent24Hr) >= 0) ? "rgb(24, 198, 131)" : "red" }}>{parseFloat(props.item.changePercent24Hr).toFixed(2) + '%'}</td>
        </tr>
    )
}

export default Rows;