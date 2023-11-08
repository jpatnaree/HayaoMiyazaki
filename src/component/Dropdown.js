function Dropdown({toSetDropDown}) {
    return(
        <>
        <label className='sort'>Sort By:</label> 
        <select onChange={toSetDropDown} name="sort" id="sort"> 
            <option value="none" name="none" >None</option> 
            <option value="byname" name="byname" >Name</option> 
            <option value="byyear" name="byyear" >Released Year</option> 
        </select>
        </>
    )
};

export default Dropdown;