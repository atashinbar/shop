import React from 'react'
import Link from 'next/link';
import Styles from '../Header.scss';



export default function Header() {
	return(
		<header>
		  <div className="nav container">
			<Link href="/">
			  <a><h1>E-Shop</h1></a>
			</Link>
			<nav>
			  <Link href="#">
				<a>Home</a>
			  </Link>
			  <Link href="#">
				<a>Shop</a>
			  </Link>
			  <Link href="#">
			  <a>Elements</a>
			  </Link>
			  <Link href="#">
			  <a>Blog</a>
			  </Link>
			  <Link href="#">
			  <a>About</a>
			  </Link>
			  <Link href="#">
			  <a>Contact</a>
			  </Link>
			  
			</nav>
		</div>
	
			
		</header>
	  )
	};
	
	
