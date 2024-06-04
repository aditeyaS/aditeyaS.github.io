import { ChangeEvent, useEffect, useState } from "react";
import ContactIcon from "../icons/ContactIcon";
import PageContainer from "../components/PageContainer";
import Card from "../components/Card";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
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
    <PageContainer
      title="Contact"
      icon={<ContactIcon size="lg" />}
      pageBody={
        <div className="flex flex-col gap-2">
          <Card
            body={
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
            }
          />
        </div>
      }
    />
  );
};

export default Contact;
