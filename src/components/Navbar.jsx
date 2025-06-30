import react from 'react'
import './Navbar.css'
function Navbar(){
    return(
 <>
 <nav className='navbar'>
   <div className='logo'>Whitepace</div>
   <ul className='nav-links'>
    <li>Products </li>
    <li>Solutions</li>
    <li>Resources</li>
    <li>Pricing</li>
    </ul>
  <div className='nav-buttons'>
    <button className='login'>Login</button>
    <button className='free'>Try Whitespace Free</button>
  </div>
 </nav> 
 </>
   
    );
}
export default Navbar;