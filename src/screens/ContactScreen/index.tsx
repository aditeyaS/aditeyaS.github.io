import { ChangeEvent, useEffect, useState } from "react";
import { ContactIcon } from "./ContactIcon";
import emailjs from "@emailjs/browser";
import ToastModel from "../../common/ToastModel";
import {
  AppScreenContainer,
  Card,
  PageContainer,
  Toast,
} from "../../components";

const successMessage =
  "Thank you for contacting me. I'll get back to you as soon as possible. :)";
const errorMessage =
  "Some error occoured while sending the message. Please reach out to me through the email in my about section. :(";

export const ContactScreen = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const PUBLIC_KEY = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;
    emailjs.init({ publicKey: PUBLIC_KEY });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastData, setToastData] = useState<ToastModel>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    const validEmailRegEx = new RegExp(/\S+@\S+\.\S+/);
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      return false;
    }
    if (!formData.email.match(validEmailRegEx)) {
      return false;
    }
    return true;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
    try {
      setIsLoading(true);
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData);
      setToastData({ message: successMessage, type: "SUCCESS" });
      setFormData({ name: "", email: "", message: "" });
      setShowToast(true);
    } catch (error) {
      setToastData({ message: errorMessage, type: "ERROR" });
      setShowToast(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppScreenContainer
      body={
        <PageContainer
          title="Contact"
          icon={<ContactIcon />}
          pageBody={
            <div className="flex flex-col gap-2">
              {showToast && toastData && (
                <Toast data={toastData} onClose={() => setShowToast(false)} />
              )}
              <Card
                body={
                  <form className="flex flex-col gap-4" onSubmit={onSubmit}>
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
                      disabled={!isFormValid() || isLoading}
                    >
                      {isLoading ? "Sending..." : "Send"}
                    </button>
                  </form>
                }
              />
            </div>
          }
        />
      }
    />
  );
};
