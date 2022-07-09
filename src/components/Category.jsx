import React from "react";

function displayCategory(ele) {
    
    return (<li key={ele.title}><a href="{ele.href}">{ele.title}</a></li>);
}

function Category(props) {

    return (
        <div>
            <ul>
                {
                    props.data.leftNav.map(displayCategory)
                }
            </ul>
        </div>
    );
}

export default Category;