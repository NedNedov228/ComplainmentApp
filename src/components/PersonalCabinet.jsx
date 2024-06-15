import React from 'react'
import ComplainmentList from './ComplainmentList'

const PersonalCabinet = () => {
  return (
    <>
    <h1>Личный кабинет</h1>

<div className="divider">
    
</div>

    <center>
    <h2>Ваши Заявления</h2>
    <div className="divider"></div>

<ComplainmentList />
{/* <table>

    <tr>
        <th>Номер</th>
        <th>Дата</th>
        <th>Статус</th>
    </tr>

    <tr>
        <td>1</td>
        <td>01.01.2021</td>
        <td>В обработке</td>
    </tr>

    <tr>
        <td>2</td>
        <td>01.01.2021</td>
        <td>В обработке</td>
    </tr>

    <tr>
        <td>3</td>
        <td>01.01.2021</td>
        <td>В обработке</td>
    </tr>
</table> */}
    </center>
    </>
  )
}

export default PersonalCabinet