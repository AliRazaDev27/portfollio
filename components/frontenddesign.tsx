const designs = [
    { name: 'Gravity Team', img: '/gravityteam.png', url: '/gravityteam' },
    { name: 'Certosoftware', img: '/certosoftware.png', url: '/certosoftware' },
    
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
          <a href={design.url} className="text-2xl md:text-3xl font-bold hover:text-red-600 underline underline-offset-8">{design.name}</a>
          </div>
          <div className="">
            <img src={design.img} alt="" />
          </div>
        </div>
      ))}
    </div>
    </div>
    );
}