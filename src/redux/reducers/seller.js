import { createReducer } from "@reduxjs/toolkit";
const initialState = {
    isSellerAuthenticated: false,
    loading: false,
    
    
    
    
  };
  
  export const sellerReducer = createReducer(initialState, {
    LoadSellerRequest: (state) => {
      
      state.isLoading = true;
    },
    LoadSellerSuccess: (state, action) => {
      state.isSellerAuthenticated = true;
      state.isLoading = false;
      state.seller = action.payload;
    },
    LoadSellerFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSellerAuthenticated = false;
    },
    clearErrors:(state)=>{
        state.error=null;
    }
});
