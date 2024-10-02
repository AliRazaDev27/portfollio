import SlideOutGradient from "./slide_out_gradient"
export function ContactUs(){
    return(
        <div className="w-full  h-screen flex flex-col items-center justify-center">
            <div className="max-w-[600px] text-center space-y-8">
            <h1 className="text-6xl item">Contact Us</h1>
            <p className="text-xl font-light">We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can’t wait to share with us!
            </p>
            <div className="w-max mx-auto bg-gradient p-[2px]">
            <div className="bg-primary">
            <SlideOutGradient>
            <div className="text-2xl w-max px-6 py-3">GET IN TOUCH</div>
            </SlideOutGradient>
            </div>
            </div>
            </div>

        </div>
    )
}
