import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./profile.css";
import Navbar from "../Navbar";
import { UnderlineNav } from "@primer/react";
import { BookIcon, RepoIcon, PeopleIcon } from "@primer/octicons-react";
import HeatMapProfile from "./HeatMap";
import { useAuth } from "../../authContext";

const Profile = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({ username: "testuser500" });
    const { setCurrentUser } = useAuth();

    useEffect(() => {
        const fetchUserDetails = async () => {
            const userId = localStorage.getItem("userId");

            if (userId) {
                try {
                    const response = await axios.get(
                        `35.175.225.217:3002/userProfile/${userId}`
                    );
                    setUserDetails(response.data);
                } catch (err) {
                    console.error("Cannot fetch user details: ", err);
                }
            }
        };
        fetchUserDetails();
    }, []);

    return (
        <>
            <Navbar />

            <UnderlineNav aria-label="Repository" sx={{ borderBottomColor: "#30363d" }}>
                <UnderlineNav.Link
                    href="#"
                    aria-current="page"
                    onClick={(e) => e.preventDefault()}
                    sx={{
                        backgroundColor: "transparent",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        "&:hover": { textDecoration: "none", color: "white" },
                    }}
                >
                    <BookIcon />
                    <span>Overview</span>
                </UnderlineNav.Link>

                <UnderlineNav.Link
                    href="/repo"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/repo");
                    }}
                    sx={{
                        backgroundColor: "transparent",
                        color: "#8d96a0",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        "&:hover": { textDecoration: "none", color: "white" },
                    }}
                >
                    <RepoIcon />
                    <span>Starred Repositories</span>
                </UnderlineNav.Link>
            </UnderlineNav>

            <div className="profile-page-wrapper">
                {/* Left Sidebar: Avatar & Bio */}
                <aside className="user-profile-section">
                    <div className="profile-avatar-container">
                        <img
                            src={`https://api.dicebear.com/7.x/identicon/svg?seed=${userDetails.username}`}
                            alt="Profile Avatar"
                            className="profile-avatar-img"
                        />
                    </div>

                    <div className="profile-names">
                        <h2 className="profile-username">{userDetails.username}</h2>
                        <p className="profile-handle">@{userDetails.username}</p>
                    </div>

                    <button className="follow-btn">Follow</button>

                    <div className="followers-info">
                        <PeopleIcon />
                        <span><strong>10</strong> followers</span>
                        <span>·</span>
                        <span><strong>3</strong> following</span>
                    </div>
                </aside>

                {/* HeatMap Card */}
                <main className="heat-map-section">
                    <div className="heat-map-card">
                        <h4 className="heat-map-title">Recent Contributions</h4>
                        <HeatMapProfile />
                    </div>
                </main>
            </div>

            <button
                className="logout-btn"
                onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("userId");
                    setCurrentUser(null);
                    window.location.href = "/auth";
                }}
            >
                Logout
            </button>
        </>
    );
};

export default Profile;