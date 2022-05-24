type foodItemProp = {
  storeName: string;
  isLighted: boolean;
};

const FoodItem: React.FC<foodItemProp> = (prop) => {
  const claName = prop.isLighted
    ? "border-solid border-2 border-gray-400 bg-blue-300 basis-1/6 h-28 m-3"
    : "border-solid border-2 border-gray-200 bg-blue-50 basis-1/6 h-28 m-3";
  return (
    <div className={claName}>
      <div className=
        "flex justify-center my-9 items-center text-2xl font-sans font-medium text-gray-600"
      >{prop.storeName}</div>
    </div>
  );
};

export default FoodItem;
