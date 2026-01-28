import React, { useState } from "react";

import placeholder from "../assets/uploadicon.png";



const Add = () => {
 const [image1, setImage1] = useState(null)
const [image2, setImage2] = useState(null)
const [image3, setImage3] = useState(null)
const [image4, setImage4] = useState(null)


   const [name,setName] = useState('')
   const [description,setDescription] = useState("")
   const [price,setPrice] = useState('')
   const [category,setCategory] = useState('Men')
   const [subCategory,setSubCategory] = useState("Topwear")
   const [bestseller,setBestseller] = useState(false)
   const [sizes,setSizes] = useState([])


  return (
    <div>
      <form action="" className="flex flex-col   w-full itmes-start gap-3">
        <div>
          <p className="mb-2">Upload Image</p>
          <div className="flex gap-3 ">
            <label htmlFor="image1">
              <div className="w-20  p-2  rounded">
                <img   src={image1 ? URL.createObjectURL(image1) : placeholder} alt="" className="w-full" />
              </div>

              <input onChange={(e)=> setImage1(e.target.files[0])} type="file" id="image1" hidden />
            </label>
            <label htmlFor="image2">
              <div className="w-20 p-2  rounded">
                <img     src={image2 ? URL.createObjectURL(image2) : placeholder} alt="" className="w-full" />
              </div>
              <input onChange={(e)=> setImage2(e.target.files[0])} type="file" id="image2" hidden />
            </label>
            <label htmlFor="image3">
              <div className="w-20 p-2  rounded">
                <img  src={image3 ? URL.createObjectURL(image3) : placeholder} alt="" className="w-full" />
              </div>
              <input onChange={(e)=> setImage3(e.target.files[0])} type="file" id="image3" hidden />
            </label>
            <label htmlFor="image4">
             <div className="w-20 p-2  rounded">
                <img src={image4 ? URL.createObjectURL(image4) : placeholder} alt="" className="w-full" />
              </div>
              <input onChange={(e)=> setImage4(e.target.files[0])} type="file" id="image4" hidden />
            </label>
          </div>
        </div>
        <div className='w-full'>
          <p className='mb-2 '>Product Name</p>
          <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder="Type here" required />
        </div>
         <div className='w-full'>
          <p className='mb-2 '>Products description</p>
          <textarea onChange={(e)=> setDescription(e.target.value)} value={description}  className='border w-full max-w-[500px] px-3 py-2' type="text" placeholder="write conten here"  required id=""></textarea>
        </div>
        <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
          <div className=''>
            <p>Products category</p>
            <select onChange={(e)=>setCategory(e.target.value)} className='w-full px-3 py-2 border'>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
           <div className=''>
            <p>Sub category</p>
            <select onChange={(e)=> setSubCategory(e.target.value)} className='w-full px-3 py-2 border'>
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>
            <div>
          <p className='mb-2' >Product price</p>
         <input onChange={(e)=> setPrice(e.target.value)} value={price} className='border w-full px-3 py-2 sm:w-[120px]' type="number" name="" id="" placeholder='39'/>
        </div>
        </div>
        <div>
          <p className='mb-2'>Product sizes</p>
          <div className='flex gap-3'>
            <div>
              <p className='bg-slate-200 px-3 py-1 cursor-pointer'>S</p>
            </div>
             <div>
              <p className='bg-slate-200 px-3 py-1 cursor-pointer'>M</p>
            </div>
             <div>
              <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XL</p>
            </div>
             <div>
              <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XXL</p>
            </div>
          </div>
        </div>
        <div className='flex gap-2 mt-2'>
          <input type="checkbox" name="" id="bestSeller" />
          <label className='cursor-pointer' htmlFor="bestSeller">Add to BestSeller</label>
        </div>
        <button type='submit' className='w-28 py-3 mt-4 bg-black text-white rounded-2xl'>Add</button>
      
      </form>
    </div>
  );
};

export default Add;
