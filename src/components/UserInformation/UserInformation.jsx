import React from "react";
import { useSelector } from "react-redux";

function UserInformation(){
    const userDesc = useSelector((store)=> store.userDesc[0])
    console.log('User Description is:',userDesc)
    
    return (
        <div>
            <h1>User Details</h1>
            <h2>Name: {userDesc.Name}</h2>
            <p>Bio: {userDesc.Bio}</p>
            <p>Height: {userDesc.Height}</p>
            <p>Weight: {userDesc.Weight}</p>
            <p>Address: {userDesc.Address}</p>
            <p>Age: {userDesc.Age}</p>
            <p>User Condtion: {userDesc.user_Condition}</p>
        </div>
    );
}
export default UserInformation