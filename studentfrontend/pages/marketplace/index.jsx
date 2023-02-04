import React from "react";
import Body from "../../components/Layouts/Body";
// import Coupons from "./[couponID]";
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    
    // const Coupons = [
    //     {id:"343g87", name:"Tesla", description:"Some writing here"},
    //     {id:"123b68", name:"Google", description:"Some writing here new"},
    //     {id:"563f69", name:"Microsoft", description:"Some writing here new waaao"}
    // ];

    return {
        props: { coupons: data }
    }


}

function Marketplace({coupons}){

    

    return (<div>
        <Body title="Marketplace">
        <div className="flex flex-col container justify-between px-6 gap-6 mt-10">
            {coupons.map(coupon => (
                <Link key={coupon.id} href={'/marketplace/' + coupon.id} className="w-full p-5 rounded-lg bg-pale">
                    <h2>{coupon.id}</h2>
                    <h2>{coupon.name}</h2>
                </Link>
            ))}
        </div>
        </Body>
    </div>);
}

export default Marketplace;