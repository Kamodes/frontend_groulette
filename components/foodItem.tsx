type foodItemProp = {
  storeName: string;
};

const FoodItem: React.FC<foodItemProp> = (prop) => {
  return (
    <div className="border bg-blue-300 basis-1/5">
      <p>{prop.storeName}</p>
    </div>
  );
};

export default FoodItem;
