import { Navigate } from "react-router-dom"

const ShopProtectedRoute=({isSellerAuthenticated,children})=>{
    if(!isSellerAuthenticated){
        return <Navigate to={`/`}replace/>
    }
return children
}
export default ShopProtectedRoute 
