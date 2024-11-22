import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MusicList from "./components/MusicList/MusicList";
import musicData from "./assets/music.json";
import AddMusician from "./components/AddMusician/AddMusician";

import "./App.css";

interface Musician {
    id: number;
    name: string;
    image: string;
    info: string;
    social_media: string;
}

function App() {
    const [musicians, setMusicians] = useState<Musician[]>(musicData);

    useEffect(() => {
        const storedMusicians = localStorage.getItem("musicians");
        if (storedMusicians) {
            setMusicians(JSON.parse(storedMusicians));
        } else {
            setMusicians(musicData);
        }
    }, []);

    const addMusician = (newMusician: Musician) => {
        setMusicians((prevMusicians) => {
            const updatedMusicians = [...prevMusicians, newMusician];
            localStorage.setItem("musicians", JSON.stringify(updatedMusicians));
            return updatedMusicians;
        });
    };

    return (
        <>
            <Router>
                <div className="App">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/music"
                                element={<MusicList musicians={musicians} />}
                            />
                            <Route
                                path="/add-musician"
                                element={
                                    <AddMusician onAddMusician={addMusician} />
                                }
                            />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </>
    );
}

export default App;
