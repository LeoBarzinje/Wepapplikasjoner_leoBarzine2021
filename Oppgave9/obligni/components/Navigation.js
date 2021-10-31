//navigation  fra kurset
import Link from 'next/link'


const Navigation = () => {
  return (
    <nav className="navigation">
     
       <ul>
    
         <li>
        <Link href="/" passHref>
           <a className="first"> Hjem</a> 
           </Link>
        </li>
        <li>
        <Link href="/quiz" passHref>
           <a className="first"> Vis json</a> 
           </Link>
        </li>
        <li>
        <Link href="/quiz/create" passHref>
           <a className="first"> Legg til i Json</a> 
           </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation