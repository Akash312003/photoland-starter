import React from 'react';
import useFetch from '../hooks/useFetch'
import {Link} from 'react-router-dom';

const CategoryNav = () => {
  const {data} = useFetch('/categories');
  console.log(data);
  return (
  <aside className='hidden xl:flex'>
    <div className='bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden'>
      <div className='bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center'>Browse categories </div>
        <div className='flex flex-col gap-y-6 p-6'>
          {data?.map((category) =>{
            console.log(category);

            return <Link
            to={`/products/${category.id}`}
             className='cursor-pointer uppercase' 
             key={category.id}>
              {category.attributes.title}
              </Link>
          })}
       
      </div>
    </div>
  </aside>
  );
};

export default CategoryNav;
