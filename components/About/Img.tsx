

const Img = () => {
  return (
    <div className="w-full">
      <img className=" block lg:hidden" src="mobile/image-interactive.jpg" alt="about Image mobile size" />
      <img className=" hidden lg:block" src="desktop/image-interactive.jpg" alt="about Image desktop size" />
    </div>
  );
}

export default Img