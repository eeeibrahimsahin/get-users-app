import React from "react";
import User from "./User/User";
export default function UserList({ users, show, bgColors }) {
    return users.map((user, index) => (
        <User
            key={user.login.uuid}
            bgColor={bgColors[index]}
            {...user}
            click={() => show(user.login.uuid, bgColors[index])}
        />
    ));
}
