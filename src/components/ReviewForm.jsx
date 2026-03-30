import { useEffect, useState } from "react";
import axios from "axios";

function ReviewForm(props) {

    const movieId = props.movieId;
    const reloadMovieData = props.onNewReview;
    const apiUrl = `http://localhost:3000/api/movies/${movieId}/reviews`;

    const initalValues = { name: "", text: "", vote: 1 };
    const [formData, setFormData] = useState(initalValues);


    function handleSubmit(e) {
        e.preventDefault();
        console.log('New review', movieId, formData, apiUrl);

        axios.post(apiUrl, formData).then(results => {
            if (results.data.id) {
                setFormData(initalValues);
                reloadMovieData();
                console.log('ok');
            } else {
                console.log('ko');
            }
        }).catch(err => {
            console.error('Ops...', err.message)
        });
    }

    function setFieldValue(e) {

        let newFormData = {
            ...formData
        };

        newFormData[e.target.name] = e.target.value;

        setFormData(newFormData);
    }

    return <div>

        <h3>Add your review</h3>
        <form onSubmit={handleSubmit}>

            <div>
                <h4>Author</h4>
                <input name="name" placeholder="Author" value={formData.name} onChange={setFieldValue} />
            </div>

            <div>
                <h4>Vote (From 1 to 5)</h4>
                <input type="number" min="1" max="5" name="vote" placeholder="Vote" value={formData.vote} onChange={setFieldValue} />
            </div>

            <div>
                <h4>Text</h4>
                <textarea name="text" value={formData.text} onChange={setFieldValue}></textarea>
            </div>

            <div>
                <button type="submit">Add Review</button>
            </div>

        </form>
    </div>

}

export default ReviewForm;