const designs = [
    { name: 'Gravity Team', url: '/gravityteam' },
    
    // Add more designs here
  ];
  import "@/app/frontenddesign.css"
export function FrontendDesign() {
    return (
        <div>
            <div className="text-3xl md:text-4xl font-semibold text-center my-8">
                Check out the Frontend Designs Templates
            </div>
        <div className="designs-container">
        
      {designs.map((design, index) => (
        <div key={index} className="design-preview">
          <div className="flex items-center justify-center my-8">
          <a href="/gravityteam" className="text-2xl md:text-3xl font-bold hover:text-red-600 underline underline-offset-8">{design.name}</a>
          </div>
          <div className="iframe-container">
            <iframe
              src={design.url}
              title={design.name}
              frameBorder="0"
              loading="lazy"
              style={{ width: '100%', height: '100vh' }} // Adjust height as needed
            />
          </div>
        </div>
      ))}
    </div>
    </div>
    );
}