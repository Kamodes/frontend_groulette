type foodItemProp = {
  storeName: string;
};

const FoodItem: React.FC<foodItemProp> = (prop) => {
  return (
    <div className="border bg-blue-300 basis-1/6 h-28 m-3">
      <div className="flex justify-center items-center">{prop.storeName}</div>
    </div>
  );
};

export default FoodItem;
