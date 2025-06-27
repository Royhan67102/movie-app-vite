import { useEffect, useState } from "react";
function Counter(){
    const [angka, setAngka] = useState(0);

    useEffect(() => {

        function manipulateDOM(){
        console.log("LifeCycle : Component DiMount");
        document.title = `Result : ${angka}`; // menambahkan di DOM
        }
        manipulateDOM(); // angka yang ada di dalam variabel usestate
        // dimanipulasi ke DOM atau dikirim ke DOM
        // tujuannya agar ketika data array dibelakang layar
    }, [angka]); // dependency array
    console.log("LifeCycle : Component di render");

    // let angka = 0;
    function addAngka(){
        // angka++;
        setAngka(angka + 1);
        console.log(angka);
    }
    return (
        <div>
            <p>Result :{angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    );
}

export default Counter;