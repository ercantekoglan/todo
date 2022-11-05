import React from 'react';

/*
function Header(){
    return <div></div>;
};
*/


const Header = () => {
    something();
    return (
        <div>
            <h3>ToDo App</h3>
        </div>
    );
};

function something(){
 //   console.log("I do something");
}

// burada sadece Header i export ediyoruz. Henuz something() functionu export etmiyoruz.
// bu sekilde kullanimi, java da private method gibi dusunebilirsin. export etmedigimiz icin something() methoduna baska kimse erisemez.
// exporting the component to the pool?
export default Header;