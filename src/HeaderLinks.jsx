import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const HeaderLinks = [
	// {
	// 	key: 'Home',
	// 	label: 'Home',
	// 	path: '/Home',
	// 	icon: <HiOutlineViewGrid />
	// },
	
	{
		key: 'About Us',
		label: 'About Us',
		path: '/about',
		icon: <HiOutlineDocumentText />
	},
	
	// {
	// 	key: 'customers',
	// 	label: 'Customers',
	// 	path: '/customers',
	// 	icon: <HiOutlineUsers />
	// },
	
	
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'logout',
		label: 'Logout',
		path: '/logout',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]