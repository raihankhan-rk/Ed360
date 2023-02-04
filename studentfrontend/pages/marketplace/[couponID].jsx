import React from "react";
import Body from "../../components/Layouts/Body";
import Link from "next/link";

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const Coupons = [
        {id:"1", img:"https://res.cloudinary.com/dj3p6sirz/image/upload/v1675534640/2_tqm0b1.png", name:"Tesla", description:"Some writing here"},
        {id:"2", img:"https://res.cloudinary.com/dj3p6sirz/image/upload/v1675534640/4_pxkyim.png", name:"Youtube", description:"Some writing here new"},
        {id:"3", img:"https://res.cloudinary.com/dj3p6sirz/image/upload/v1675534640/5_bsrgzm.png", name:"Github", description:"Some writing here new"},
        {id:"4", img:"https://res.cloudinary.com/dj3p6sirz/image/upload/v1675534640/3_tyufgq.png", name:"Google Play", description:"Some writing here new waaao"},
        {id:"5", img:"https://res.cloudinary.com/dj3p6sirz/image/upload/v1675534641/6_zogxex.png", name:"Linkedin", description:"Some writing here new waaao"},
        {id:"6", img:"https://res.cloudinary.com/dj3p6sirz/image/upload/v1675534640/1_fe1enp.png", name:"Amazon", description:"Some writing here new waaao"}
    ];

    // const paths = data.map(coupon => {
    //     return{
    //         params: {couponID: coupon.id.toString()}
    //     }
    // })

    const paths = Coupons.map(coupon => {
        return{
            params: {couponID: coupon.id.toString()}
        }
    })

    console.log(paths);
    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const idd = context.params.couponID;
    // const res = await fetch("https://jsonplaceholder.typicode.com/users/" + idd);
    console.log("IIIDDD: ",idd);
    // const data = await res.json();

    const data = [
        {id:"1", img:"https://res.cloudinary.com/dj3p6sirz/image/upload/v1675534640/2_tqm0b1.png", name:"Tesla", description:"Some writing here"},
        {id:"2", img:"https://res.cloudinary.com/dj3p6sirz/image/upload/v1675534640/4_pxkyim.png", name:"Youtube", description:"Some writing here new"},
        {id:"3", img:"https://res.cloudinary.com/dj3p6sirz/image/upload/v1675534640/5_bsrgzm.png", name:"Github", description:"Some writing here new"},
        {id:"4", img:"https://res.cloudinary.com/dj3p6sirz/image/upload/v1675534640/3_tyufgq.png", name:"Google Play", description:"Some writing here new waaao"},
        {id:"5", img:"https://res.cloudinary.com/dj3p6sirz/image/upload/v1675534641/6_zogxex.png", name:"Linkedin", description:"Some writing here new waaao"},
        {id:"6", img:"https://res.cloudinary.com/dj3p6sirz/image/upload/v1675534640/1_fe1enp.png", name:"Amazon", description:"Some writing here new waaao"}
    ];

    let ret = null;
    data.map((e)=>(e.id==idd?(ret=e):null))

    return{
        // props: {coupon: data}
        props: {coupon: ret}
    }
}


const Coupons = ({coupon}) => {
    console.log("Coupon: ",coupon);
    return (<div>
        <Body title="Marketplace">
            <div className="mx-auto font-bold text-accent text-2xl mt-5 text-center">{coupon.name}</div>
            <div className="flex justify-center mt-5 py-10 rounded-xl">
                <img className="w-11/12 rounded-xl" src={coupon.img} alt="" />
            </div>
            <div className="mx-auto bg-pale w-11/12 py-8 rounded-xl px-8">
                <h1 className="text-primary mt-4 text-2xl font-semibold">Description and condition</h1>
                <p className="text-lg leading-tight mt-4">This is a coupon. You can use this if you are poor and are happy with a peasantly discount of 1 or 2%. I don't know how that even makes a difference but if it makes you happy then it's ok.</p>
            </div>

            <div className='flex flex-col items-center justify-center mt-10'>
            <div className='flex flex-row bg-white rounded-full px-1 pl-2 mb-2 items-center justify-center self-end drop-shadow-lg container mx-auto w-32'>
                    <h3 className='text-lg text-secondary mr-1'><b>Cost:</b> 60</h3>
                        <svg className='w-5' width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.148132" y="0.444458" width="25.8461" height="25.8461" rx="12.923" fill="#FFE587"/>
                            <rect x="1.87122" y="2.16748" width="22.3999" height="22.3999" rx="11.2" fill="#F1B53F"/>
                            <path d="M13.3583 17.6872L9.85335 20.3467C9.67968 20.4879 9.49022 20.5544 9.28498 20.5463C9.07973 20.5387 8.89817 20.4801 8.74029 20.3702C8.58241 20.2604 8.46021 20.1113 8.37369 19.9231C8.28654 19.7348 8.28243 19.5308 8.36137 19.3111L9.71126 14.9571L6.27734 12.533C6.08789 12.4075 5.96948 12.2427 5.92211 12.0388C5.87475 11.8348 5.88264 11.6465 5.94579 11.4739C6.00895 11.3013 6.11946 11.1482 6.27734 11.0145C6.43522 10.8815 6.62468 10.8149 6.84572 10.8149H11.0848L12.4584 6.29617C12.5373 6.07651 12.6598 5.90768 12.8259 5.78969C12.9914 5.67233 13.1689 5.61365 13.3583 5.61365C13.5478 5.61365 13.7252 5.67233 13.8907 5.78969C14.0568 5.90768 14.1793 6.07651 14.2582 6.29617L15.6318 10.8149H19.8709C20.0919 10.8149 20.2814 10.8815 20.4393 11.0145C20.5972 11.1482 20.7077 11.3013 20.7708 11.4739C20.834 11.6465 20.8419 11.8348 20.7945 12.0388C20.7471 12.2427 20.6287 12.4075 20.4393 12.533L17.0054 14.9571L18.3552 19.3111C18.4342 19.5308 18.4304 19.7348 18.3439 19.9231C18.2567 20.1113 18.1342 20.2604 17.9763 20.3702C17.8185 20.4801 17.6369 20.5387 17.4316 20.5463C17.2264 20.5544 17.0369 20.4879 16.8633 20.3467L13.3583 17.6872Z" fill="#FFE587"/>
                        </svg>
                    </div>
                <Link href="/success">
                    <button type='submit' className='p-2 px-4 text-xl flex justify-center w-40 container mx-auto bg-primary text-white text-center font-semibold rounded-full'>
                       Buy
                        
                    </button>
                </Link>
            </div>
        </Body>
    </div>)
}

export default Coupons;