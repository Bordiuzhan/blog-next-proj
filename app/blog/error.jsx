"use client"

export default function ErrorWrapper({error}){
    console.log(error);

    return <h1>Oops !!! {error.message}</h1>
}