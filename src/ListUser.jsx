/*import { useEffect,useState} from "react";
function ListUser()
{
    let []=useState([])
    useEffect(()=>{
        fetch ("https://isonplaceholder.typicode.com/users").then((res)=>{res.json()})
        .then(data=>{
            setUserList(data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return (
        if (length==0){
        <p> loading....</p>
                }else{
                    <table>
                    {
                       map(user,index)=>(
                            <tr key ={index}>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            </tr>
                        )
                    }
                        </table>
                }
    )
}*/
import { useEffect, useState } from "react";

function ListUser() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUserList(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    userList.length === 0 ? (
      <p>user not found</p>
    ) : (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
}

export default ListUser;