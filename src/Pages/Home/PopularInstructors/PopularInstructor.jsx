import React from 'react';

const PopularInstructor = ({instructor , index}) => {
    const{Name,image,NumberOfStudents} = instructor
    
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="Album" className='h-80 w-full lg:h-52  lg:w-52'/></figure>
  <div className="card-body">
    <h2 className="font-bold text-xl">{Name}</h2>
    <p className='font-medium'><span className='font-semibold text-secondary'>{NumberOfStudents}+</span> Students are Enjoying.</p>
  </div>
  <div className="badge badge-primary absolute left-2 top-2 text-white font-semibold">Top {index+1}</div>
</div>
        </div>
    );
};

export default PopularInstructor;