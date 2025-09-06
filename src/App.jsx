import React from 'react';
import './App.css'; // Import custom styles

// --- Helper Data (can be replaced with API data) ---
const artists = [
    { name: 'Elena Petrova', bio: 'A contemporary painter known for her abstract landscapes.', img: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Kenji Tanaka', bio: 'A sculptor who works with recycled metals to create intricate forms.', img: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Maria Garcia', bio: 'A photographer capturing the essence of urban life through a monochrome lens.', img: 'https://i.pravatar.cc/150?img=3' },
];

const artworks = [
    { title: 'Crimson Dawn', medium: 'Oil on canvas', year: '2024', img: 'https://picsum.photos/seed/picsum1/600/400' },
    { title: 'Steel Blossom', medium: 'Welded Steel', year: '2023', img: 'https://picsum.photos/seed/picsum2/600/400' },
    { title: 'City Veins', medium: 'Silver Gelatin Print', year: '2025', img: 'https://picsum.photos/seed/picsum3/600/400' },
    { title: 'Echoes in Blue', medium: 'Acrylic', year: '2024', img: 'https://picsum.photos/seed/picsum4/600/400' },
    { title: 'Fragmented Reality', medium: 'Mixed Media', year: '2023', img: 'https://picsum.photos/seed/picsum5/600/400' },
    { title: 'Silent Watcher', medium: 'Charcoal', year: '2025', img: 'https://picsum.photos/seed/picsum6/600/400' },
];

function App() {
    return (
        <div className="bg-stone-50 text-stone-800 font-serif">

            {/* 1. HERO/OVERVIEW SECTION */}
            <header className="hero-section text-white text-center flex flex-col justify-center items-center p-8">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight title-shadow">Echoes of the Metropolis</h1>
                <p className="mt-4 text-xl md:text-2xl max-w-2xl title-shadow">An exploration of urban landscapes and the human spirit within them.</p>
                <a href="#tickets" className="mt-8 px-8 py-4 bg-rose-600 text-white font-bold text-lg rounded-full hover:bg-rose-700 transition-transform transform hover:scale-105 cta-button">
                    Buy Tickets Now
                </a>
            </header>

            <main className="container mx-auto px-6 py-16">

                {/* 2. EXHIBITION INFORMATION SECTION (4.1) */}
                <section id="info" className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-4 text-stone-900">Exhibition Details</h2>
                            <div className="space-y-4 text-lg">
                                <p><strong>🗓️ Dates:</strong> October 15, 2025 - January 10, 2026</p>
                                <p><strong>⏰ Timings:</strong> 10:00 AM - 6:00 PM (Tuesday - Sunday)</p>
                                <p><strong>📍 Venue:</strong> The Modern Art Gallery, 123 Art Street, New Delhi, India</p>
                            </div>
                            <div className="mt-6 p-6 bg-stone-100 rounded-lg border border-stone-200">
                                <h3 className="text-2xl font-bold mb-2">Curator's Note</h3>
                                <p className="text-stone-600 italic">"This exhibition brings together diverse voices to challenge our perception of the city. It's a dialogue between chaos and calm, concrete and consciousness."</p>
                            </div>
                        </div>
                        {/* Google Maps Integration Placeholder */}
                        <div className="h-80 md:h-full rounded-lg overflow-hidden shadow-xl border-4 border-white">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.348625511018!2d77.21672101509215!3d28.61994698242255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3f0d5f8f5d%3A0x8e7b1e4f4d5f4f5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1662456789123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Venue Location"
                            ></iframe>
                        </div>
                    </div>
                </section>

                {/* 3. FEATURED ARTISTS SECTION (4.2) */}
                <section id="artists" className="mb-20 text-center">
                    <h2 className="text-4xl font-bold mb-10 text-stone-900">Featured Artists</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {artists.map((artist) => (
                            <div key={artist.name} className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <img src={artist.img} alt={artist.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-stone-200" />
                                <h3 className="text-2xl font-semibold">{artist.name}</h3>
                                <p className="text-stone-600 mt-2">{artist.bio}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. ARTWORK GALLERY SECTION (4.3) */}
                <section id="gallery" className="mb-20">
                    <h2 className="text-4xl font-bold mb-10 text-center text-stone-900">Gallery Highlights</h2>
                    {/* A real implementation would use a stateful lightbox for image enlargement */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {artworks.map((art) => (
                            <div key={art.title} className="group gallery-item rounded-lg overflow-hidden shadow-lg relative">
                                <img src={art.img} alt={art.title} className="w-full h-72 object-cover gallery-image-hover"/>
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h4 className="font-bold text-xl">{art.title}</h4>
                                    <p className="text-sm">{art.medium}, {art.year}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. CTA & PRESS SECTION (4.4, 4.5) */}
                <section id="tickets" className="bg-stone-800 text-white rounded-lg p-12 text-center">
                    <h2 className="text-4xl font-bold mb-4">Join Us for the Experience</h2>
                    <p className="text-lg text-stone-300 max-w-2xl mx-auto mb-8">Secure your spot to witness this landmark exhibition. Tickets are available online for a limited time.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a href="#buy" className="px-10 py-4 bg-rose-600 text-white font-bold text-lg rounded-full hover:bg-rose-700 transition-transform transform hover:scale-105 cta-button">
                            Buy Tickets
                        </a>
                        <a href="#press-kit" className="px-10 py-4 bg-transparent border-2 border-stone-400 text-stone-300 font-bold text-lg rounded-full hover:bg-stone-700 hover:border-stone-700 transition-colors">
                            Download Press Kit (PDF)
                        </a>
                    </div>
                </section>

            </main>

            {/* 6. FOOTER (Newsletter & Social Media) */}
            <footer className="bg-stone-100 border-t border-stone-200">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Newsletter Subscription */}
                        <div>
                            <h3 className="text-2xl font-bold">Stay Updated</h3>
                            <p className="text-stone-600 mb-4">Subscribe to our newsletter for upcoming exhibitions.</p>
                            <form className="flex">
                                <input type="email" placeholder="your.email@example.com" className="w-full p-3 rounded-l-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                                <button type="submit" className="bg-stone-800 text-white px-6 py-3 rounded-r-md font-bold hover:bg-stone-900">Subscribe</button>
                            </form>
                        </div>
                        {/* Social Media & Copyright */}
                        <div className="text-center md:text-right">
                            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                            <div className="flex justify-center md:justify-end gap-6 mb-6">
                                {/* Icons are inlined SVGs for simplicity */}
                                <a href="#" aria-label="Facebook" className="text-stone-600 hover:text-rose-600"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg></a>
                                <a href="#" aria-label="Instagram" className="text-stone-600 hover:text-rose-600"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266.058 1.644.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg></a>
                                <a href="#" aria-label="X/Twitter" className="text-stone-600 hover:text-rose-600"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
                            </div>
                            <p className="text-stone-500 mt-4">&copy; 2025 The Modern Art Gallery. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;