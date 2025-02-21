function Bg({ children }) {
  return (
    <div className="h-screen w-screen bg-linear-to-br from-[#5D536B] to-[#7D6B91] flex flex-col justify-center items-center gap-8">
      {children}
    </div>
  );
}

export default Bg;
