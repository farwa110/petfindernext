import Image from "next/image";

const AnimalFilter = ({ data, active, setFilter }) => {
  return (
    <div className="flex gap-4 overflow-x-auto px-4">
      {data.map((animal) => (
        <button
          key={animal.label}
          onClick={() => setFilter(animal.name)}
          className={`flex items-center gap-2 rounded-full border px-4 py-2 ${
            active === animal.name
              ? "bg-rose-300 text-white"
              : "border-gray-300 bg-white text-gray-500"
          } min-w-fit transition-all duration-300`}
        >
          <Image
            src={animal.icon}
            alt={animal.label}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="text-base font-semibold">{animal.label}</span>
        </button>
      ))}
    </div>
  );
};

export default AnimalFilter;
