import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom'
import { TbEyeSearch } from "react-icons/tb";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import getUsers, { deleteUser } from '../API/crudApi';
import ExportDropdown from './ExportDropdown';

const Home = () => {
  let [users,setusers]=useState([]);

  let [searchValue,setSearchValue]=useState("");

  let getAllUsers=async()=>{
    try {
      let response=await getUsers();
      // console.log(response);
      let data=response.data;
      console.log(data);
      setusers(data);
      
    } catch (error) {
      toast.error(error);
      console.log("Error while fetching users:",error);
      
    }
  };
  useEffect(()=>{
    getAllUsers();
  },[]);

  //! handle delete functionality
  let handleDelete=async(id)=>{
    let response=window.confirm("Are you sure want to delete the user");
    try {
      if(response){
        await deleteUser(id);
        toast.success("User has been deleted successfully");
      }
    } catch (error) {
      toast.error(error)
      
      console.log("Error while delete the user");
      
    }
  };

  //! search user by their id or name functionality
  let filteredUsers=users.filter((user,index)=>{
      let searchTerm=searchValue.toLowerCase();
      return(
        user.empId.toLowerCase().includes(searchTerm)|| user.empName.toLowerCase().includes(searchTerm)
      )
  })
  return (
    <section className="w-[100vw] min-h-[clac(100vh-70px)] justify-center flex">
     <article className='w-[95%] h-full flex flex-col'>
       <header className='text-center'>
        <h1 className='text-3xl font-semibold uppercase pt-5 text-pink-500 '>Employee Management System (EMS)</h1>
      </header>
      <div className='w-full h-[80px] mt-3 flex justify-between items-center'>
       <input type="text" 
       name='searchValue'
       id='searchValue'
       placeholder='Search by EMPID or EMPName' className='py-2 w-[350px] px-10 outline-none border
        border-gray-500 rounded-md focus:ring-1 focus:ring-green-600 text-lg' 
        value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)}/>
        <span>
          <NavLink to={"/add-user"} className='px-14 py-2 rounded-md text-lg font-semibold bg-green-600 hover:bg-green-700 cursor-pointer'>
            Add User+</NavLink>
        </span>
     <ExportDropdown users={filteredUsers}/>
      </div>
      <main className='w-full shadow-xl rounded  bg-gray-400 p-3 mb-10'>
        <table className='w-full '>
          <thead className='py-2 bg-gray-800'>
            <tr className=' py-2'>
              <td className='text-center text-white py-2 text-xl font-semibold'>Sr.NO.</td>
              <td className='text-center text-white py-2 text-xl font-semibold' >EMP ID</td>
              <td className='text-center text-white py-2 text-xl font-semibold'>EMP NAME</td>
              <td className='text-center text-white py-2 text-xl font-semibold'>EMP DESG</td>
              <td className='text-center text-white py-2 text-xl font-semibold'>EMP DEPT</td>
              <td className='text-center text-white py-2 text-xl font-semibold'>ACTIONS</td>
            </tr>
          </thead>
          <tbody className='bg-gray-600 '>
            {filteredUsers.map((user,index)=>{
              return  <tr key={index} className='text-white hover:bg-gray-400'>
                <td className='py-2 text-center text-lg font-semibold'>{index+1}</td>
                <td className='py-2 text-center text-lg font-semibold'>{user.empId}</td>
                <td className='py-2 text-center text-lg font-semibold'>{user.empName}</td>
                <td className='py-2 text-center text-lg font-semibold'>{user.empDesg}</td>
                <td className='py-2 text-center text-lg font-semibold'>{user.empDept}</td>
                <td className='py-2 text-center text-lg font-semibold'>
                  <span  className='flex items-center gap-2 justify-center'>
                    <NavLink to={"/view-user"} 
                    state={user}
                    className='px-4 flex items-center gap-2 bg-blue-600 text-white cursor-pointer'>View <TbEyeSearch/></NavLink>
                  <span>
                    <NavLink to={"/edit-user"} state={user} 
                    className='px-4 flex items-center gap-2 bg-green-600 text-white cursor-pointer'>Update <FaUserEdit/></NavLink>
                    </span>
                  <span className="flex items-center gap-2 ">
                    <span onClick={()=>handleDelete(user.id)}  className="px-4 py-1 flex items-center gap-2 bg-rose-600 text-white rounded cursor-pointer">Delete <MdDelete /></span>
                  </span>
                  
                  </span>
                </td>
              </tr>
             })
            }
          </tbody>
       
          <tfoot className='bg-gray-900 text-white '>
            <tr >
              <td className='py-2 text-lg font-semibold text-center' colSpan={6} >
                Total Users: {filteredUsers.length}
              </td>
            </tr>
          </tfoot>
        </table>
      </main>
     </article>
    </section>
  )
}

export default Home