import React from 'react';
import { Link } from 'react-router-dom';

/*
function Header(){
    return <div></div>;
};
*/


const Header = () => {
    doSomething();
    return (
        <div style={{display:"flex", justifyContent:"space-between", padding:"1em"}}>
            <div style={{paddingTop:"1em"}}>ToDo App</div>
            <Link to = "/dashboard">Dashboard</Link>
        </div>
    );
};

function doSomething(){
 //   console.log("I do something");
}

// burada sadece Header i export ediyoruz. Henuz something() functionu export etmiyoruz.
// bu sekilde kullanimi, java da private method gibi dusunebilirsin. export etmedigimiz icin something() methoduna baska kimse erisemez.
// exporting the component to the pool?
export default Header;