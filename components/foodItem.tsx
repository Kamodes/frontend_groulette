type foodItemProp = {
  storeName: string;
  isLighted: boolean;
};

const FoodItem: React.FC<foodItemProp> = (prop) => {
  const claName = prop.isLighted
    ? "border bg-blue-100 basis-1/6 h-28 m-3"
    : "border bg-blue-300 basis-1/6 h-28 m-3";
  return (
    <div className={claName}>
      <div className="flex justify-center items-center">{prop.storeName}</div>
    </div>
  );
};

export default FoodItem;
