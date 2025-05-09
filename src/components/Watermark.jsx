const Watermark = () => {
  return (
    <div>
      <p className="uppercase">Where precision meets passion.</p>
      <div className="w-[260px] h-3 flex">
        <span className="w-[90%] flex bg-primary h-full"></span>
        <span className="w-[10%] h-full bg-secondary flex"></span>
      </div>
      <p className="uppercase text-[0.75rem]">
        where performance defines greatness
      </p>
    </div>
  );
};

export default Watermark;
