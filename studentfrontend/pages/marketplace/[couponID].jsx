import React from "react";
import Body from "../../components/Layouts/Body";

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    // const Coupons = [
    //     {id:"343g87", name:"Tesla", description:"Some writing here"},
    //     {id:"123b68", name:"Google", description:"Some writing here new"},
    //     {id:"563f69", name:"Microsoft", description:"Some writing here new waaao"}
    // ];

    const paths = data.map(coupon => {
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
    const id = context.params.couponID;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json();

    return{
        props: {coupon: data}
    }
}


const Coupons = ({coupon}) => {
    return <div>
        <Body title="Marketplace">
            <div className="mx-auto bg-pale w-11/12 h-[200px] mt-8 rounded-xl">{coupon.name}hi</div>
            <div className="mx-auto bg-pale w-11/12 h-[90px] mt-6 rounded-xl">{coupon.email}</div>
            <div className="mx-auto bg-pale w-11/12 h-[200px] mt-8 rounded-xl">
                <h1 className="text-primary font-[Montserrat] mt-4 text-[3.6vw] px-4 py-2 font-semibold">Description and condition</h1>
                <p className="text-[3vw] font-[Montserrat] px-4">This is a coupon. You can use this if you are poor and are happy with a peasantly discount of 1 or 2%. I don't know how that even makes a difference but if it makes you happy then it's ok.</p>
            </div>
        </Body>
    </div>
}

export default Coupons;