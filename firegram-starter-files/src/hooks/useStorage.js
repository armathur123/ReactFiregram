import { useState } from "react";
import { useEffect } from "react";
import { projectStorage } from "../firebase/config";

const useStorage = (file) => { //custom hook
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //create references in firebase bucket 
        const storageRef = projectStorage.ref(file.name);

        storageRef.put(file).on('state_changed', (snap) => { //put file in storage ref 'on' statechange, grab snapshot of the file
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async() => { //marked as async bc we are going to use await
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        })
    }, [file])

    return {progress, url, error}
}