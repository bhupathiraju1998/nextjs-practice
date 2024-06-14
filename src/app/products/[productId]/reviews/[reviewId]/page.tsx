export default function ReviewId({params}:{
    params:{reviewId:string;
        productId:string
    }
}){
    return <h1>this is review {params.reviewId}and product {params.productId}</h1>
}