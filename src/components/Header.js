import React from 'react'

 function Header() {
    return (
     <header style={ headerstyle }>
         <h1>TodoList</h1>
     </header>
    )
}
const headerstyle = {
background: '#333',
color:'#fff',
textAlign:'centre',
padding:'10px'
}
export default Header;
