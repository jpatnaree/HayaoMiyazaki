function Dropdown({toSetDropDown}) {
    return(
        <>
        <label className='sort'>Sort By:</label> 
        <select onChange={toSetDropDown} name="sort" id="sort"> 
            <option value="none" name="none" >None</option> 
            <option value="byname" name="byname" >Released Year</option> 
            <option value="byyear" name="byyear" >Name</option> 
        </select>
        </>
    )
};

export default Dropdown;