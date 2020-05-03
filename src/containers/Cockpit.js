import React, { useState, useEffect } from "react";
import UserList from "../components/Users/UserList";
import axios from "axios";
import Detail from "../components/Detail/Detail";
import Button from "../components/Button/Button";
import Spinner from "../components/Spinner/Spinner";
import Modal from "../components/Modal/Modal";
const URL = "https://randomuser.me/api/?results=5";
export default function Cockpit() {
    const [users, setUsers] = useState([]);
    const [getUsers, setGetUsers] = useState(0);
    const [userDetail, setUserDetail] = useState([]);
    const [showDetail, setShowDetail] = useState(false);
    const [bgColor, setBgColor] = useState("");
    const [loading, setLoading] = useState(false);
    const bgColors = [
        "bg-primary",
        "bg-secondary",
        "bg-success",
        "bg-danger",
        "bg-warning",
    ];
    const displayDetailHandler = (id, color) => {
        let newUser = users.filter((user) => user.login.uuid === id);
        setUserDetail(newUser);
        setShowDetail(true);
        setBgColor(color);
    };
    useEffect(() => {
        setLoading(true);
        setUsers([]);
        setShowDetail(false);
        axios
            .get(URL)
            .then((response) => {
                setUsers([...response.data.results]);
                setLoading(false);
            })
            .catch((e) => setLoading(null));
    }, [getUsers]);
    let btnName = "Get Users";
    if (getUsers > 0) btnName = "Change Users";
    return (
        <div className="d-flex justify-content-center">
            {loading ? (
                <Spinner />
            ) : (
                <Button
                    btnName={btnName}
                    onClick={() => setGetUsers((old) => old + 1)}
                />
            )}
            {getUsers > 0 && loading == null && <Modal />}
            {getUsers > 0 && (
                <div>
                    <UserList
                        users={users}
                        show={displayDetailHandler}
                        bgColors={bgColors}
                    />
                </div>
            )}
            {showDetail && (
                <Detail show={showDetail} {...userDetail[0]} color={bgColor} />
            )}
        </div>
    );
}
