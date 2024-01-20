function ShowListFilter({ filter, setFilter }){

    function filterClick(e){
        setFilter(e.target.value)
    }

    return (
        <div>
            <label><input type="radio" name="radio" value="Rating" onChange={filterClick} /> Rating: High to Low</label>
            <label><input type="radio" name="radio" value="Year" onChange={filterClick} /> Premiered year: New to Old</label>
            <label><input type="radio" name="radio" value="Name" onChange={filterClick} /> Name: A to Z </label>
        </div>
    )
}

export default ShowListFilter;