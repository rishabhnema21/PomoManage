import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="w-full px-6 py-16">
        <h4 className="text-center text-sm opacity-50 tracking-wide">
          Contact
        </h4>
        <h1 className="text-center text-3xl sm:text-4xl mt-2">
          Your Thoughts Matter <br />
          <span className="font-anton bg-gradient-to-r from-sky-400 via-indigo-600 to-sky-700 bg-clip-text text-transparent">
             Talk to Us
          </span>
        </h1>

        < ContactForm />

      </section>
  )
}

export default Contact