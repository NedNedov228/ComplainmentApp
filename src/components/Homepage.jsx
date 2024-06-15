import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
        <h1>Добро Пожаловать в Нарушениям.нет</h1>
        <p><Link className='link' to={"/login"} >Войдите</Link> или <Link className='link' to={"/reg"}>Зарегистрируйтесь </Link>чтобы получить доступ к жалобам</p>
    </>
  )
}

export default Homepage