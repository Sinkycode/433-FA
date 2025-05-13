import { singleImagePicture } from "../assets/images/gallery";
const SingleImage = () => {
  return (
    <div className="h-[50vh] mb-4">
      <img
        src={singleImagePicture}
        alt=""
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
};

export default SingleImage;
