import { MdSearch } from "react-icons/md";

function Content() {
  return (
    <section className="w-screen h-full px-[160px]">
      <div className="px-[120px]">
        <div className="relative">
          <input
            type="text"
            name="Usuário"
            placeholder="Pesquise um filme"
            className="bg-white text-2xl px-3 py-3 w-full rounded-lg relative focus:outline-none focus:ring-0"
          />
          <MdSearch size={28} className="absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer"></MdSearch>
        </div>
      </div>
    </section>
  );
}

export default Content;
