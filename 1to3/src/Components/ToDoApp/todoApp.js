// component i eklediginde bu sekilde import etmen lazim
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";

const TodoApp = () => {
  //js de olsa elementlere bu sekilde ulasip html dosyasina mudahele edebiliorduk.React avantaji bu kadar kod yazmamiz gerekmiyor.
  //document.getElementById("root").innerHTML = "<div>Hello World</div>"

  // ****variable declarations - functions bu kisimda tanimlariz.
  // ****inside the return statement you actually return the VIEW.

  // Bir degisken tanimlarken mumkun oldugunca const olarak tanimla. Cunku const cant reassign to another value.
  // default olarak conts kullan
  // React da data type yok.It figues out its by own.
  const firstName = "John";


  /*private String name = "ercan";
  *public String getName(){return name;}
  *public void SetName(String name){this.name = name;} bu islem ile assagidaki islem ayni*/
  // The state object is where you store property values that belong to the component. 
  // When the state object changes, the component re-renders.
  // "Ercan" burada state oluyor
  //useState returns an array
  const [name, setName] = useState("Ercan");
  const [age, setAge] = useState(20);
  
  // useEffect is a Hook. Hook is a special method
  //takes 2 param = 1. is function, 2. is an array of dependencies
  // dom da bir degisiklik oldugunda bu method her defasinda calisacak - inside of the todo component
  // array icini bos biraktigimizda, function dependent nothing
  // on-init method aka like a constructor. yani sadece TodoApp calistiginda calisacak
  useEffect(() => {
    console.log("I`m was run inside of the no-dependency useEffect method/hook ");
  },[]);

  // is NOT like a constructor
  // useEffect hook allows us to keep track of the changes that are happening on the screen
  // function dependent on "name". yani ekranda sadece name state in de degisiklik olursa calisacak
  useEffect(() => {
    console.log("Hello my name is", name, "and", age, "years old." );
  }, [name, age]);
  // age a bagli bir input kurarsak, degisiklik oldugunda yine calisacak.cunku 2 degeri de listening
  return (
    // When we return code here, return expects everything to be nested inside a one parent tag.
    
    // input taki onChange expects a function
    <div>
      <Header />
      <div>
        <h1>Hello Word</h1>
        <h3>My name is {firstName} Doe</h3>
        <h3>My name is {name}</h3>
        <label htmlFor="name" style={{marginRight : "1rem"}}>Name</label>
        <input type="text" id="name" onChange={(e) => setName(e.target.value)} value = {name}/>
      </div>
      <Footer />
    </div>
  );
};

// bu method expor edilmezse private durumund kalir.
function addItem (){
  console.log("Item added");
}

export { addItem };
export default TodoApp;
