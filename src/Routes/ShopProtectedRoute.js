import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ShopProtectedRoute=({children})=>{
    const{isLoading,isSellerAuthenticated}=useSelector((state)=>state.seller)
    if(isLoading===false){
        if(!isSellerAuthenticated){
            return <Navigate to={`/shop-login`} replace/>
        }
        return children
    }
}

export default ShopProtectedRoute 
