import React from 'react';

const PopularClass = ({item}) => {
    const{className,image,numberOfStudents}=item;
    return (
        <section>
            <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Class Image" className='h-60 w-full'/></figure>
  <div className="px-4 py-2">
    <h2 className="brandTitle">
      {className}
    </h2>
  </div>
  <div className="badge badge-primary absolute right-2 top-2 text-red-600 font-semibold">{numberOfStudents}+ Students</div>
</div>
        </section>
    );
};

export default PopularClass;