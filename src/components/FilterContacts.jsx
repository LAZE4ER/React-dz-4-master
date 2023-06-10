import { TextField } from "@mui/material"
const FilterContacts = ({Filter, setFilter}) =>{
    return(
        <div>
        <h1>Find contacts by name</h1>
        <TextField type="text" value={Filter} onChange={(e) => setFilter(e.target.value)} />
        </div>
    )
}
export default FilterContacts