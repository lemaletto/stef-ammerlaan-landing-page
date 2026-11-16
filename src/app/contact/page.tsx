import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6 max-w-4xl mx-auto flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold mb-4 tracking-tight">Contact</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-md">
          Discutons de votre projet.
        </p>

        <div className="space-y-6 text-lg">
          <div>
            <span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">
              Email
            </span>
            <a
              href="mailto:agence@ammerlaanstefarchitecture.com"
              className="font-medium text-black hover:opacity-70 transition-opacity"
            >
              agence@ammerlaanstefarchitecture.com
            </a>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">
              Téléphone
            </span>
            <a
              href="tel:+33686302378"
              className="font-medium text-black hover:opacity-70 transition-opacity"
            >
              06 86 30 23 78
            </a>
          </div>

          <div className="pt-4">
            <span className="block text-xs uppercase tracking-widest text-gray-400 mb-3">
              Réseaux
            </span>
            <a
              href="https://www.instagram.com/ammerlaan_stef_architecture/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-110 transition-transform duration-300"
              aria-label="Page Instagram"
            >
              <Image
                src="/assets/images/instagram.png"
                alt="Instagram"
                width={50}
                height={50}
                className="w-9 h-9 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}