import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    console.log("Form data submitted:", formData);

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-display_menu 
    rounded-b-lg
     flex flex-col items-center justify-center rounded-lg px-4 py-4">
      <h2 className="text-4xl font-bold mb-8 text-white">
        Contacto
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-cards_bg p-8 rounded-lg shadow-lg w-full max-w-lg border-2 border-white/10"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-white font-medium mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Marcelo"
            className="w-full px-4 py-3 bg-display_menu text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-cards_bg"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-white font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="agachateytellueve@gmail.com"
            className="w-full px-4 py-3 bg-display_menu text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-cards_bg"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-white font-medium mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder={`Dame un pepino. La quiero con mayonesa sin kechup y con mostaza. \nAVE PEPINO!!!`}
            className="w-full px-4 py-3 bg-display_menu text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-cards_bg"
            rows={4}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-display_menu text-display_menu py-3 px-4 rounded-lg hover:bg-display_menu hover:bg-opacity-35 hover:text-white transition-all duration-300"
        >
          Enviar
        </button>
      </form>

      {submitted && (
        <div className="mt-6 text-green-400 animate-breathe">
          ¡Gracias! Tu mensaje ha sido enviado.
        </div>
      )}
    </div>
  );
};

export default ContactForm;
