import React, { useRef, useState } from "react";
import "./MusicList.css";

interface Musician {
    id: number;
    name: string;
    image: string;
    info: string;
    social_media: string;
}

interface MusicListProps {
    musicians: Musician[];
}

function MusicList({ musicians }: MusicListProps) {
    const searchInputRef = useRef<HTMLInputElement>(null);

    const [filteredMusicians, setFilteredMusicians] =
        useState<Musician[]>(musicians);

    const handleFilter = () => {
        const searchTerm = searchInputRef.current?.value || "";
        const filtered = musicians.filter((musician) =>
            musician.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMusicians(filtered);
    };

    return (
        <div className="music-list">
            <h1 className="music-title">
                <span>Music</span> List
            </h1>
            <input
                ref={searchInputRef}
                type="text"
                placeholder="Search musicians..."
                onChange={handleFilter}
                className="music-input"
            />

            <ul className="grid-container">
                {filteredMusicians.map((musician) => (
                    <li className="grid-item" key={musician.id}>
                        <div>
                            <img
                                className="artist-logo"
                                src={musician.image}
                                alt={musician.name}
                            />
                        </div>

                        <p className="music-name">{musician.name}</p>
                        <p className="music-info">{musician.info}</p>
                        <p>
                            <a
                                className="music-social-link"
                                target="_blank"
                                href={musician.social_media}
                            >
                                Social media
                            </a>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MusicList;
