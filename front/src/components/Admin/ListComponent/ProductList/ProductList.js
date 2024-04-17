function ProductList({ watchs }) { // Используйте деструктуризацию для пропсов
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {watchs.map((watch, index) => (
                    <li key={index}>
                        {watch.nameWatch} - {watch.price} грн
                        {watch.photoUrls && <img src={watch.imageUrl.split(';')[0]} alt={watch.nameWatch} style={{ width: '100px' }} />}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;