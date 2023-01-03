import React from 'react';

const Service = ({service}) => {
    return (
<section class="card w-64 bg-base-100 pl-8 ml-8 justify-items-center">
  <figure class="px-10 pt-8">
    <img  src={service.img} alt="" />
    </figure>
  <div class="card-body items-center text-center items-stretch">
    <span class="card-title pl-"> {service.name}  </span>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">

    </div>
  </div>
</section>
    );
};

export default Service;