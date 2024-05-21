import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function UserInformation() {
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch({
        type:'FETCH_USERDESC'
      })
    },[])
    const userDesc = useSelector((store) => store.userDesc[0])
    console.log('User Description is:', userDesc)

    return (
        <div>
            <h1>User Details</h1>
            <h2>{userDesc.Name}</h2>
            <h2>Bio</h2>
                <p>{userDesc.Bio}</p>
            <h2>Height</h2>
                <p>{userDesc.Height}</p>
            <h2>Weight</h2>
                <p>{userDesc.Weight}</p>
            <h2>Address</h2>
                <p>{userDesc.Address}</p>
            <h2>Age</h2>
                <p>{userDesc.Age}</p>
            <h2>User Condtion</h2>
                <p>{userDesc.user_condition}</p>
        </div>
    );
}
export default UserInformation