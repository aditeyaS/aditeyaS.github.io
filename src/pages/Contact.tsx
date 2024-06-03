import { ChangeEvent, useState } from "react";
import ContactIcon from "../icons/ContactIcon";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section className="py-10">
      <div className="flex justify-center flex flex-col items-center py-10 gap-4">
        <div className="motion-safe:animate-bounce">
          <ContactIcon size="lg" />
        </div>
        <h1 className="text-primary text-4xl font-bold md:text-8xl">Contact</h1>
      </div>
      <div className="flex flex-col gap-2">
        <div className="card bg-base-200">
          <div className="card-body">
            <form className="flex flex-col gap-4">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="input input-bordered input-sm"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Eamil</span>
                </div>
                <input
                  type="eamil"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  className="input input-bordered input-sm"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Message</span>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered text-area-sm h-24"
                  placeholder="Message"
                ></textarea>
              </label>
              <button
                className="btn btn-primary btn-sm"
                disabled={
                  formData.name === "" ||
                  formData.email === "" ||
                  formData.message === ""
                }
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
