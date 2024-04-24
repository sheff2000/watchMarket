function ProductList({ watches, onDelete, onEdit }) {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {watches.map((watch) => (
                    <li key={watch._id}>
                        {watch.nameWatch} - {watch.price} грн
                        {watch.imageUrl && (
                            <img src={watch.imageUrl.split(';')[0]} alt={watch.nameWatch} style={{ width: '100px' }} />
                        )}
                        <button onClick={() => onDelete(watch._id)}>Удалить</button>
                        <button onClick={() => onEdit(watch)}>Редактировать</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
