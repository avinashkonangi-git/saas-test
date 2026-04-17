import Image from "next/image";
type BuildProps = {
  build_a_team_title: string;
  build_a_team_description: string;
  build_a_team_image: string;
};
const Build = ({ build_a_team_title, build_a_team_description, build_a_team_image }: BuildProps) => {
  return (
    <section className="bg-[#FFFDE6] py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[7fr_3fr] items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div>
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
          {build_a_team_title.split("<br>").map((line: string, i: number) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
          </h3>

          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-xl">
            When reps have structure and managers have visibility, performance follows. <br />
            JustCall helps sales managers improve execution, coaching, and results,
            without burning out their team.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-blue-700 transition">
              Start Free Trial
            </button>

            <button className="border border-blue-600 text-blue-600 px-5 py-2.5 rounded-md text-sm font-medium hover:bg-blue-50 transition">
              Book a Demo
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center md:justify-end">
          
          <Image
                                                src="/build.png"
                                                alt="build"
                                                width={350}
                                                height={350}
                                                className="object-cover object-top"
                                                priority
                                              />
        </div>

      </div>
    </section>
  );
}

export default Build