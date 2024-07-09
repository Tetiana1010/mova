import ImageIcon from "../icons/image-icon";

const Skeleton = () => {
  return (
    <div className="flex justify-center items-center w-24 h-24 bg-light-gray animate-pulse">
      <ImageIcon />
    </div>
  );
};

export default Skeleton;
