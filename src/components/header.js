import { FaCog } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
    return (
        <div id="header">
            <div className="header">
                <div className="leftHeader">
                    <a href="/"><div>Coins</div></a>
                    <a href="/"><div>Exchanges</div></a>
                    <a href="/"><div>Swap</div></a>
                </div>
                <div className='logo'>
                    <a href='/'><img src="https://coincap.io/static/logos/black.svg" alt="logo"></img></a>
                </div>
                <div className="rightHeader">
                    <div className="searchInput"><input type="text" name='search' id="search-input" /><FaSearch  style={{transform: `translateX(-20px)` }}/></div>
                    <div className="item1"><a href='/'><FaCog /></a></div>
                    <div className="item2"><button className="cnt-button" >Connect Wallet</button></div>
                </div>
            </div>
        </div>
    )
}