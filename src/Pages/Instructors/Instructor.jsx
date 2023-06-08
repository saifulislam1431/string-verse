import React from 'react';

const Instructor = ({instructor}) => {
    const{Name,image,Email,NumberOfClasses,NameOfTheClasses} = instructor;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Instructor" className="rounded-xl w-full h-52" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-center">{Name}</h2>
    <h2 className='font-semibold'>Email: {Email}</h2>
    <div className=''>
<ul className='list-disc'>
    <p className='font-semibold text-primary'>Name Of Classes</p>
{
    NameOfTheClasses.map((theClass , index)=><li key={index} className='font-semibold'>{theClass}</li>)
}
</ul>
<p className='font-semibold text-secondary'>Total Classes: {NumberOfClasses}</p>
    </div>
    <div className="card-actions">
      <button className="myBtn">See Classes</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Instructor;