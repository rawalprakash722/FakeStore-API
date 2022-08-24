import React, { useEffect, useState } from 'react'



const Product = () => {
   

    const [users, setUsers] = useState([]);

    const getUsers = async () =>{
        const response = await fetch('https://fakestoreapi.com/products/1');
        setUsers( await response.json());
            
    }

    useEffect(()=>{
        getUsers();

    },[])

  return (
    <>
                   
                    <div key={users.id}>
            <div  className="container py-5">
                <div className="row py-4">
                   

                <div className="col-lg-6 mb-4" data-aos="flip-right">
                    <img src={users.image} className="rounded-circle" alt={users.title} height="400px" width="400px" />
                </div>
                <div className="col-lg-6" data-aos="zoom-in">
                    <h4 className="text-uppercase text-black-50" data-aos="fade-up" data-aos-duration="1000">
                        {users.category} 
                    </h4>
                    <h1 className="display-5" data-aos="fade-up" data-aos-duration="2000">{users.title}</h1>
                    <p className="lead fw-bolder " data-aos="fade-up">
                        Rating {users.rating && users.rating.rate} 
                        <i className="fa fa-star ms-3 fs-6"></i>
                        <i className="fa fa-star ms-2 fs-6"></i>
                        <i className="fa fa-star ms-2 fs-6"></i>
                        <i class="fa-regular fa-star-half-stroke ms-2 fs-6"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4" data-aos="fade-up" data-aos-duration="3000" style={{color:"#FFD700"}}>
                    <i class="fa-solid fa-dollar-sign"></i> {users.price} 
                    </h3>
                    <p className="lead" data-aos="fade-up" data-aos-duration="4000">{users.description}</p>
                    <button className="btn btn-outline-dark hovBtn px-4 py-2" data-aos="fade-right"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine">
                        Add to Cart
                    </button>
                    <button className="btn ms-2 px-3 py-2" data-aos="fade-left"
     data-aos-offset="150"
     data-aos-easing="ease-in-sine" style={{backgroundColor:"#FFB4B4"}}>
                        Go to Cart
                    </button>
                </div>

                </div>
            </div>
        </div>
                    </>

  )
}

export default Product