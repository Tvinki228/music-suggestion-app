import React, { useState } from "react";
import "./AddMusician.css";

interface Musician {
    id: number;
    name: string;
    image: string;
    info: string;
    social_media: string;
}

interface AddMusicianProps {
    onAddMusician: (newMusician: Musician) => void;
}

function AddMusician({ onAddMusician }: AddMusicianProps) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [info, setInfo] = useState("");
    const [socialMedia, setSocialMedia] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newMusician: Musician = {
            id: Date.now(),
            name,
            image,
            info,
            social_media: socialMedia,
        };

        onAddMusician(newMusician);

        setName("");
        setImage("");
        setInfo("");
        setSocialMedia("");
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Add musician</h2>
            <form className="musician-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Musician's name:</label>
                    <input
                        type="text"
                        className="form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Image (URL):</label>
                    <input
                        type="text"
                        className="form-input"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Info:</label>
                    <textarea
                        className="form-textarea"
                        value={info}
                        onChange={(e) => setInfo(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label className="form-label">Social media (URL):</label>
                    <input
                        type="text"
                        className="form-input"
                        value={socialMedia}
                        onChange={(e) => setSocialMedia(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="form-button">
                    Add
                </button>
            </form>
        </div>
    );
}

export default AddMusician;
