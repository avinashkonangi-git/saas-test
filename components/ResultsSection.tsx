import Image from "next/image";
type ResultProps = {
  turn_rep_activity_title: string;
  turn_rep_activity_sub_title: string;
  help_reps_talk_title: string;
  help_reps_talk_description:string;
  help_reps_talk_image: string;
  make_followups_title: string;
  make_followups_description: string;
  make_followups_image: string;
};
const ResultsSection = ({ turn_rep_activity_title, turn_rep_activity_sub_title, help_reps_talk_title, help_reps_talk_description, help_reps_talk_image, make_followups_title, make_followups_description, make_followups_image }: ResultProps) => {
  const points = [
    "Skip dead calls with power and predictive dialers",
    "Better pickup rates with local presence dialing",
    "Inbound leads routed instantly to available reps",
    "After-hours calls routed to AI agents instantly",
  ];

  return (
    <>
    <section className="bg-white-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {turn_rep_activity_title}
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            {turn_rep_activity_sub_title}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              {help_reps_talk_title}
            </h3>
            <div
              className="custom-wysiwyg"
              dangerouslySetInnerHTML={{
                __html: help_reps_talk_description,
              }}
            />
            {/*
            <p className="mt-4 text-gray-600 text-sm md:text-base">
              More conversations beat more effort. With JustCall, your team is bound
              to hit more live leads.
            </p>

            
            <ul className="mt-6 space-y-3">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  
                  
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold">
                    ✓
                  </span>

                  <span className="text-gray-700 text-sm">{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-gray-600 text-sm">
              Reps spend their time talking, not waiting, leading to more meetings per rep.
            </p> */ }
          </div>

          {/* RIGHT SIDE (Illustration Placeholder) */}
          <div className="rounded-2xl flex items-center justify-center">
            <Image
                          src={help_reps_talk_image}
                          alt="message"
                          width={622}
                          height={503}
                          className="object-cover object-top"
                          priority
                        />
          </div>

        </div>
      </div>
    </section>

    <section className="bg-white-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">        

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT SIDE */}
          <div className=" rounded-2xl flex items-left ">
            <Image
                                      src={make_followups_image}
                                      alt="message"
                                      width={622}
                                      height={503}
                                      className="object-cover object-top"
                                      priority
                                    />
          </div>

          {/* RIGHT SIDE (Illustration Placeholder) */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              {make_followups_title}
            </h3>

            <div
              className="custom-wysiwyg"
              dangerouslySetInnerHTML={{
                __html: make_followups_description,
              }}
            />

          </div>

        </div>
      </div>
    </section>
    </>
  );
}

export default ResultsSection