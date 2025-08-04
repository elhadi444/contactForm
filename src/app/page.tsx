import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center md:m-8">
      <div className="relative p-4 max-w-6xl w-full mx-auto bg-[url('/images/salon.png')] bg-cover bg-center md:rounded-2xl overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 md:rounded-2xl z-0" />

        {/* Foreground content */}
        <div className="relative z-10 p-8 text-white">
          <h1 className="text-3xl font-bold">Contactez l'agence</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
