import CommunityPage from '@/pages/Community/CommunityPage'
import HomePage from '@/pages/Home/HomePage'
import {createBrowserRouter} from 'react-router-dom'

const routeList = createBrowserRouter([
    {
        path:'/',
        element: <CommunityPage />
    },
    {
        path:'/home',
        element:<HomePage />
    }
])

export default routeList