import './SlideOutGradient.css'; // Assuming you want to use external CSS for styling

const SlideOutGradient = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="slide-out-gradient">
      {children}
    </div>
  );
};

export default SlideOutGradient;