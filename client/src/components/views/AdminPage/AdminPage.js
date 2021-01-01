import React from 'react'

function AdminPage() {
    const txt = 'txtId';
    let opacity = 1;

    const onClickHandler = () => {
        opacity < 0.1 ? opacity = 1 : opacity -= 0.1;
        document.getElementById(txt).style.opacity = opacity;
        console.log(opacity);
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }} onClick={onClickHandler}>
            <div id={txt}>
                 Admin Page
                 <table style={{border: '1px solid black'}}>
                     <tr>
                         <td>1</td>
                         <td>2</td>
                         <td>3</td>
                     </tr>
                 </table>
            </div>
            
        </div>
    )
}

export default AdminPage
