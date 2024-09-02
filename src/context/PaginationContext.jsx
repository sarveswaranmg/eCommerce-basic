import React, { createContext,useState,useContext} from 'react'
export const PaginationWrapper = createContext();
function PaginationContext({children}) {
    const [pageNum,setPageNum] = useState(1);
    const [pageSize,setPageSize] = useState(5);
  return (
    <div>
      <PaginationWrapper.Provider value={{pageNum,setPageNum,pageSize,setPageSize}}>
        {children}
      </PaginationWrapper.Provider>
    </div>
  )
}
export const usePaginationContext = () => useContext(PaginationWrapper)
export default PaginationContext
