import React, {useState} from "react";
import firebase from "../../Config/firebase";

//import {render} from "react-dom";


function FileUpload() {
    const [image, setImage] = useState(null)
    const [url, setUrl] = useState(null)
    const [progressBar, setProgressBar] = useState(0)
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    };

    const handleUpload = () => {
        const uploadTask = firebase.storage.ref(`images/${image.name}`).put(image)
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progressBar = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100)
                setProgressBar(progressBar);
            },
            error => {
                console.log(error)
            },
            () => {
                firebase.storage.ref("images").child(image.name).getDownloadURL().then(url => {
                    setUrl(url)
                    console.log('url: ', url)
                });
            }
        )
    };

    console.log('image: ', image)
    return (
        <>
            <br/>
            <input type={"file"} onChange={handleChange}/>
            <button onClick={handleUpload}>Upload</button>
            <progress value={progressBar} max={"100"}/>
            <br/>
            <div>{url}</div>
            <img src={url || "http://via.placeholder.com/100" } alt={"firebase-img"}/>
        </>
    )
}

//render(<FileUpload/>)


export default FileUpload;
