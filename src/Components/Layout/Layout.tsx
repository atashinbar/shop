import React, { Children } from 'react'
import { LayoutProp } from '../../Utils/Types'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Layout(props: LayoutProp) {
	const { children } = props
	return (
		<React.Fragment>
			<Header />
			{children}
			<Footer />
		</React.Fragment>
	)
}
