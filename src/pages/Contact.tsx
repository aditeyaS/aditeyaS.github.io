import ContactIcon from "../icons/ContactIcon";

const Contact = () => {
  return (
    <section>
      <div className="flex justify-center flex flex-col items-center py-10 gap-4">
        <div className="motion-safe:animate-bounce">
          <ContactIcon size="lg" />
        </div>
        <h1 className="text-primary text-4xl font-bold">Contact</h1>
      </div>
      <div className="flex flex-col gap-2">
        {/* {educationList.map((education, index) => (
          <div className="card bg-base-200" key={index}>
            <div className="card-body flex flex-col gap-5 items-center md:flex-row">
              <div className="rounded-full ring ring-accent ring-offset-base-200 ring-offset-4">
                <img className="w-32 h-32" src={education.logo} />
              </div>
              <div className="flex flex-col text-center md:text-left">
                <h3 className="font-serif text-xl">{education.institute}</h3>
                <span className="text-lg  text-neutral">
                  {education.location}
                </span>
                <span className="font-serif text-xl ">
                  {education.degree}, {education.major}
                </span>
                <span className="text-lg  text-neutral">
                  {education.duration}
                </span>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default Contact;
