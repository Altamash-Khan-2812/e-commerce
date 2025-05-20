import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const FilteredProducts = () => {
    const products = useSelector(state => state.products.filteredProducts);
    const {type} = useParams()

    console.log('products', products);
    console.log('params', type);
    
    return <div>Filtered  Products</div>
}

export default FilteredProducts