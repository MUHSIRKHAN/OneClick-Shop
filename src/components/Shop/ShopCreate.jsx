import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from '../../styles/styles';
import { server } from '../../server';
import axios from 'axios';
import { toast } from 'react-toastify';
import { RxAvatar } from 'react-icons/rx';

const ShopCreate= () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address,setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const[avatar,setAvatar]=useState();
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const newForm = new FormData();

    newForm.append("file", avatar);
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("password", password);
    newForm.append("zipCode",zipCode);
    newForm.append("address",address);
    newForm.append("phoneNumber",phoneNumber);
    axios
      .post(`${server}/shop/create-shop`, newForm, config)
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setPassword("");
        setAvatar();
        setZipCode();
        setAddress("");
        setPhoneNumber()
        
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });

  }
  const handleFileInputChange=(e)=>{
    const file=e.target.files[0];
    setAvatar(file)

  }
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8" style={{ backgroundImage: "url('https://www.dequalita.com/images/wardrobe18.jpg')" , backgroundSize: 'cover',
        backgroundPosition: 'center',}}>
          <div className="sm:mx-auto sm:w-full sm:max-w-[35rem]">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-black  " >
              REGISTER AS A SELLER
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6 " onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    SHOP NAME
                  </label>
                  <div className="mt-1">
                    <input
                      type="name"
                      name="name"
                    
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-[#7c183d] sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    SHOP EMAIL
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                    
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-[#7c183d] sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                   SHOP PHONE NUMBER
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="phone-number"
                    
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-[#7c183d] sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ADDRESS
                  </label>
                  <div className="mt-1">
                    <input
                      type="address"
                      name="address"
                    
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-[#7c183d] sm:text-sm"
                    />
                  </div>
                  <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP CODE
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="zipCode"
                    
                      required
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-[#7c183d] sm:text-sm"
                    />
                  </div>
                </div>
                </div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    PASSWORD
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type={visible ? "text" : "password"}
                      name="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-[#7c183d] ] sm:text-sm"
                    />
                    {visible ? (
                      <AiOutlineEye
                        className="absolute right-2 top-2 cursor-pointer"
                        size={25}
                        onClick={() => setVisible(false)}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className="absolute right-2 top-2 cursor-pointer"
                        size={25}
                        onClick={() => setVisible(true)}
                      />
                    )}
                  </div>
                </div>
                <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black-700 bg-white hover:bg-gray-50"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700"
                  >
                    Submit
                  </button>
                </div>
                <div className={`${styles.noramlFlex} w-full`}>
                  <h4>Already have an Account?</h4>
                  <Link to="/shop-login" className="text-[#7c183d] pl-2">
                    Sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}
    


export default ShopCreate