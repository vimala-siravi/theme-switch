function ProductItem({ details }) {
  return (
    <li className="py-5">
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full"
          src={details.thumbnail}
          alt={details.title}
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6">{details.title}</p>
          <p className="mt-1 truncate text-xs leading-5">
            {details.description}
          </p>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p className="text-sm leading-6">{details.brand}</p>
          <p className="mt-1 text-xs leading-5">{details.price}</p>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
