import React from "react";

export default function Detail({
    color,
    name: { title, first, last },
    location: {
        street: { number, name },
        city,
        state,
        country,
        postcode,
    },
    email,
    phone,
    cell,
    picture: { large: pic },
}) {
    let newClass = `card ml-5 ${color}`;

    return (
        <div className={newClass} style={{ width: "30rem" }}>
            <img className="card-img-top" src={pic} alt="avatar" />
            <div className="card-body">
                <h1 className="card-title">
                    {title} {first} {last}
                </h1>
                <p className="card-text">
                    <span className="font-weight-bold">Address: </span>
                    {number} {name}, {city}, {state}, {country}
                </p>
                <p>
                    <span className="font-weight-bold">Postcode: </span>
                    {postcode}
                </p>
            </div>
            <div className="card-body">
                <p>
                    <span className="font-weight-bold">Email:</span> {email}
                </p>
                <hr />
                <p>
                    <span className="font-weight-bold"> Phone/Cell: </span>
                    {phone}, {cell}
                </p>
            </div>
        </div>
    );
}
