import Image from "next/image";
type ProblemProps = {
  section2_title: string;
  section2_sub_title: string;
  section2_bottom_text: string;
};

const ProblemSection = ({ section2_title, section2_sub_title, section2_bottom_text }: ProblemProps) => {
  const items = [
    {
      title: "Reps dialing slowly or inconsistently",
      icon: "hourglass-low.png",
    },
    {
      title: "Missed follow-ups that stall deals",
      icon: "link-off.png",
    },
    {
      title: "CRM notes written hours later or never",
      icon: "file-x.png",
    },
    {
      title: "Coaching based on partial information",
      icon: "user-exclamation.png",
    },
  ];

  return (
    <section className="bg-white-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          {section2_title}
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          {section2_sub_title}
        </p>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-[#F2F4F7] rounded-lg px-4 py-3 shadow-sm border border-gray-200"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-md bg-[#FFF] bg-white-100 text-gray-600 text-lg">
                <Image
                                          src={`/${item.icon}`}
                                          alt={item.title}
                                          width={35}
                                          height={35}
                                          className="object-cover object-top"
                                          priority
                                        />
              </div>
              <p className="text-sm text-gray-700 text-left">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <p className="mt-6 text-gray-600 text-sm">
          {section2_bottom_text}
        </p>
      </div>
    </section>
  );
}

export default ProblemSection;