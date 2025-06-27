import { useContext,useState } from "react"; 
import Alert from "../Alert/Alert"; 
import styles from "./AddMovie.module.css";  
import { useNavigate } from "react-router-dom";
import MoviesContext from "../context/MoviesContext";

function AddMovieForm() {
    // const [title, setTitle] = useState("");
    // const [date, setDate] = useState("");
    const navigation = useNavigate();
    const {movies, setMovies} = useContext(MoviesContext);
    const [formData, setFormData] = useState({
        title: "",
        date: "",
    });
    // const [isTitleError, setIsTitleError] = useState(false);
    // const [isDateError, setIsDateError] = useState(false);
    const [errors, setErrors] = useState({
        isTitleError: false,
        isDateError: false,
    });
    
    // const { movies, setMovies } = props; 
    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }


    // function handleTitle(e) { 
    //     setTitle(e.target.value);
    // }

    // function handleDate(e) {
    //     setDate(e.target.value);
    // }

    // function validate() {
    //     if (title === "") {
    //         setIsTitleError(true);
    //         setIsDateError(false); // Pastikan hanya error title yang aktif
    //         return false;
    //     } else if (date === "") {
    //         setIsDateError(true);
    //         setIsTitleError(false); // Pastikan hanya error date yang aktif
    //         return false;
    //     } else {
    //         setIsTitleError(false);
    //         setIsDateError(false);
    //         return true;
    //     }
    // }

    function validate() {
    const validation = {
        isTitleError: formData.title === "",
        isDateError: formData.date === "",
    };

    setErrors({ ...validation });

    return !validation.isTitleError && !validation.isDateError;
    }

    function AddMovie(){
        const movie = {
            id: "xyz",
            title: title,
            year: date,
            type: "Movie",
            poster: "https://picsum.photos/300/400",
        };
        setMovies([...movies, movie]);
        navigation("/");
    }

    const { title, date } = formData; // Ambil title dan date dari formData

    function handleSubmit(e) {
        e.preventDefault(); // Pindahkan preventDefault ke awal
        validate() && AddMovie(); // Panggil validate dan jika valid, panggil AddMovie
        // if (title === "") {
        //     setIsTitleError(true);
        // } else {
        //     setIsTitleError(false);
        // }

        // if (date === "") {
        //     setIsDateError(true);
        // } else {
        //     setIsDateError(false);
        // }

        // if (title !== "" && date !== "") {
        //     const movie = {
        //         id: "xyz",
        //         title: title,
        //         year: date,
        //         type: "Movie",
        //         poster: "https://picsum.photos/300/400",
        //     };
        //     setMovies([...movies, movie]);
            // setTitle(""); // Reset input title
            // setDate(""); // Reset input date
        }

    return (
        <div className={styles.container}> 
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input_from}
                    id="title"
                    type="text"
                    value={title}
                    name="title"
                    placeholder="Masukkan Judul Film"
                    onChange={handleChange}
                />
                {errors.isTitleError && <Alert>Title Wajib Diisi</Alert>}

                <input
                    className={styles.input_from}
                    id="date"
                    type="text"
                    value={date}
                    name="date"
                    placeholder="Masukkan Tanggal Rilis"
                    onChange={handleChange}
                />
                {errors.isDateError && <Alert>Date Wajib Diisi</Alert>} {/* Perbaikan pesan error */}

                <button className={styles.button_form}>Add Movie</button>
            </form>
        </div>
    );
}

export default AddMovieForm;