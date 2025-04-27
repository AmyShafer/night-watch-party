import React from "react";
import EventList from "../components/events/EventList";
import MovieList from "../components/movieArchive/MovieList";
import MemberList from "../components/member/MemberList";
import Merch from "Merch.js";

const Home = () => {
    return (
        <div className = "container">
            <MovieArchive />
            <EventList />
            <MemberList />
            <Merch />
            <MovieList />
        </div>
    );
}