import React,{useState} from "react"
import StyleObj from "../style.module.css"
import useFetchList from "../helper/useFetchList"
import ProductList from "../components/ProductList";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { usePaginationContext } from "../context/PaginationContext";
const productUrl = "https://fakestoreapi.com/products"
const categoryUrl = "https://fakestoreapi.com/products/categories"

function Product(){
    const {pageNum,setPageNum,pageSize,setPageSize} = usePaginationContext();
    const [productList,loader] = useFetchList(productUrl)
    const [categoryList,categoryLoader] = useFetchList(categoryUrl)
    const [searchTerm,setSearchTerm] = useState("")
    const [sortDirection, setSortDirection] = useState(0)
    const [category,setCategory] = useState("all")
    let filteredList = productList;
    if(searchTerm!=""){
        const searchedText = searchTerm.toLowerCase
        filteredList=filteredList.filter(product=>{
            let productTitle = product.title.toLowerCase();
            return productTitle.includes(searchedText)
        })
        console.log(filteredList);
        
    }
    const handleChange=(e)=>{
        setSearchTerm(e.target.value)
    }
    if(sortDirection!=0){
        if(sortDirection==1){
            filteredList.sort((a,b)=>{
                a.price-b.price;
            });
        }
        else{
            filteredList.sort((a,b)=>{
                b.price-a.price;
            });
        }
    }
    if(category!="all"){
        filteredList=filteredList.filter((product)=>{
            return product.category == category
        })
    }
    let sidx = (pageNum-1) * pageSize;
    let eidx = (sidx)+pageSize;
    let PaginatedList = filteredList.slice(sidx,eidx)
    let totalPages = Math.ceil(filteredList.length/pageSize);
    return(
    <>
    <header className={StyleObj.nav_wrapper}>
        <div className={StyleObj.search_sortWrapper}>
            <input type="text" value={searchTerm} onChange={handleChange}></input>
            <div className={StyleObj.icons_container}>
            <ArrowCircleDownIcon
            fontSize="large" style={{color: "white"}} onClick={()=>setSortDirection(1)}></ArrowCircleDownIcon>
            <ArrowCircleUpIcon fontSize="large" style={{color: "white"}} onClick={()=>setSortDirection(-1)} ></ArrowCircleUpIcon>
        </div>
        </div>
        
    </header>
    <div className ={StyleObj.categories_wrapper}>
        <button className={StyleObj.category_option} onClick={()=>setCategory("all")}>All</button>
        {
            categoryList.map((category)=>{
                return <button className={StyleObj.category_option} onClick={()=>{setCategory(category)
                     setPageNum(1)}}>{category}</button>
            })
        }
        
    </div>
    {loader && <div className={StyleObj.loader}></div>}
        <main className={StyleObj.product_wrapper}>
            {PaginatedList.map((product)=>{
                return(
                <ProductList  key = {product.id} product={product}></ProductList>
            )
            })} 
        </main>
        <div className = {StyleObj.pagination}>
            <button onClick={()=>{
                if(pageNum==1) return
                setPageNum(pageNum-1)
            }}><ArrowLeftIcon></ArrowLeftIcon></button>
            <p>{pageNum}</p>
            <button onClick={()=>{
                if(pageNum==totalPages) return
                setPageNum(pageNum+1);
            }}><ArrowRightIcon></ArrowRightIcon></button>
        </div>
    </>
    )
}

export default Product

