import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import UserNav from '../components/UserNav'

export default function EjemploReactQuery() {
  
  const [userId, setUserId] = useState("user1")

  const getUserInformation = async ({queryKey}) => {
    console.log("queryKey", queryKey)
    const [user, userId] = queryKey
    const data = await axios.get(
      `http://localhost:3000/users/${userId}`
    )
    console.log("data", data)
    return data
  }

  const {isLoading, error, data} = useQuery({
    queryKey: ["user", userId],
    queryFn: (queryKey) => getUserInformation(queryKey)
  })

  if(isLoading){
    return <p>It's loading...</p>
  }

  if(error){
    return <p>Error...</p>
  }

  const {name, profilePictureUrl} = data.data

  return (
    <>
      <UserNav userId={userId} setUserId={setUserId} />
      <h1>User: {name}</h1>
      <img src={profilePictureUrl} alt={name} />
    </>
  )
}
