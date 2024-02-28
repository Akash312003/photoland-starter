import React, {useContext, useState} from 'react';
import Logo from '../img/logo.png';
import {SlBag} from 'react-icons/sl';
import {FiMenu} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import SearchForm from '../components/SearchForm'
import CategoryNavMoblie from '../components/CategoryNavMobile'
import Cart from '../components/Cart'
import { CartContext } from '../context/CartContext';

const Header = () => {
  const {isOpen , setIsopen}=useContext(CartContext);
  return <header>
    <div className='container mx-auto'>
      <div>
        <div>
          <FiMenu />
        </div>
        <div>
          <CategoryNavMoblie />
        </div>
        <Link to={'/'}>
        <img src={Logo} alt='' />
        
        </Link>
        <div className='hidden w-full xl:flex xl:max-w-[734px]'> 
          <SearchForm />
        </div>
        <div>
          <div>Need Help? 1800 234 235 </div>
          <div className='relative cursor-pointer'>
            <SlBag className='text-2xl' />
            <div>2</div>
          </div>
          <div className='bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300'>
            <Cart />
          </div>
        </div>
      </div>
      <div className='lg:hidden'>
        <SearchForm />
      </div>
    </div>
  </header>
};

export default Header;
