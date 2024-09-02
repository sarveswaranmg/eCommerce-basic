import React from "react"
import { Routes, Route, Outlet, useParams,Link,Navigate} from "react-router-dom";
function Routing(){
    return (
        <>
        <div>Navbar</div>
        <ul>
            <div>Home</div>
            <div>About</div>
        </ul>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}>
                <Route path="company" element={<Company></Company>}></Route>
                <Route path="ceo" element={<Ceo></Ceo>}></Route>
            </Route>
            <Route path="/users/:id/:name" element={<User></User>}></Route>
            <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>} ></Route>
        </Routes>
        </>
    )
}

function Home(){
    return (
        <>
        <div>Home Page</div>
        <h1>Our Company is the best</h1>
        </>
    )
}

function About(){
    return (
        <>
        <div>About Page</div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad at similique impedit ipsa alias animi vel accusamus nemo error deleniti, vero nisi consectetur minus, dolor vitae accusantium est. Id, sequi!</p>
        <Outlet></Outlet>
        </>
    )
}

function Company(){
    return(
        <>
        <h2>We never layoff</h2>
        <Outlet></Outlet>
        </>
    )
}

function Ceo(){
    return(
        <>
        <h2>CEO, here</h2>
        <Outlet></Outlet>
        </>
    )
}

function User(){
    const [users,setUsers] = useState(null);
    const [id,name] = useParams();
    useEffect(()=>{
        async function getUsers(){
            let resp = await fetch(`https://fakestoreapi.com/users/${id}`)
            let data = await resp.json()
            setUsers(data)
        }
        getUsers();
    },[])

    return <>
        {users==null?<h1>...Loading</h1>:
        <>
            <div>I am User {id}</div>
            <li>{users.name.firstname}{users.name.lastname}</li>
            <li>{users.name.phone}</li>
        </>}
        </>
}

function PageNotFound(){
    return (
        <>
        <h1>Oops wrong page...</h1>
        </>
    )
}

export default Routing