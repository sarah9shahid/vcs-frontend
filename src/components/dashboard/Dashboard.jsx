
import React, { useState } from "react";
import Navbar from "../Navbar";
import "./dashboard.css";

const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const suggestedRepos = [
        { id: 1, name: "testRepo", visibility: "Public" },
        { id: 2, name: "Test Repository", visibility: "Public" },
        { id: 3, name: "testRepo2", visibility: "Private" },
        { id: 4, name: "Test Repo New", visibility: "Public" },
    ];

    const userRepos = [
        { id: 1, name: "Test Repo New", visibility: "Public" },
        { id: 2, name: "test repo 1", visibility: "Private" },
    ];

    const events = [
        { title: "Tech Conference", date: "Dec 15, 2026" },
        { title: "Developer MeetUp", date: "Dec 30, 2026" },
        { title: "Recruitment Dinner", date: "Jan 10, 2027" },
    ];

    const filteredUserRepos = userRepos.filter((repo) =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Navbar />

            <div className="dashboard-container">
                {/* Left Column: Suggested Repositories */}
                <aside className="dashboard-card">
                    <h3 className="dashboard-title">Suggested Repositories</h3>
                    <div className="repo-list">
                        {suggestedRepos.map((repo) => (
                            <a href={`/repo/${repo.id}`} key={repo.id} className="repo-item">
                                <span>{repo.name}</span>
                                <span className="repo-badge">{repo.visibility}</span>
                            </a>
                        ))}
                    </div>
                </aside>

                {/* Center Column: Your Repositories */}
                <main className="dashboard-card">
                    <h3 className="dashboard-title">Your Repositories</h3>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search repositories..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="repo-list">
                        {filteredUserRepos.map((repo) => (
                            <a href={`/repo/${repo.id}`} key={repo.id} className="repo-item">
                                <span>{repo.name}</span>
                                <span className="repo-badge">{repo.visibility}</span>
                            </a>
                        ))}
                    </div>
                </main>

                {/* Right Column: Upcoming Events */}
                <aside className="dashboard-card">
                    <h3 className="dashboard-title">Upcoming Events</h3>
                    <ul className="events-list">
                        {events.map((event, index) => (
                            <li key={index} className="event-item">
                                <div className="event-name">{event.title}</div>
                                <div className="event-date">{event.date}</div>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </>
    );
};

export default Dashboard;