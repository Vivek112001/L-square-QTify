import React from 'react';
import { Search, } from "@mui/icons-material";
import './SearchBox.css';

function SearchBox() {
    return (
        <form action="#">
            <div className="search-box">
                <input type="search" placeholder="Search a album of your choice" id="songName" name="songName" />

                <div className="search-icon">
                    <Search />
                </div>
            </div>
        </form>
    )
}

export default SearchBox