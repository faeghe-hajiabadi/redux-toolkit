import { useSelector } from "react-redux";
import { selectAllUseres } from "../users/usersSlice";
import React from 'react'

function PostAuthor({userId}) {
    const users = useSelector(selectAllUseres);
    const author = users.find(user=>user.id===userId)

  return (
    <span>by{author ? author.name : 'unknown author'}</span>
  )
}

export default PostAuthor