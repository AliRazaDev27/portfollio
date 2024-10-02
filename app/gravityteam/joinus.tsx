export function JoinUs(){
    return(
        <div className="w-full h-screen flex  items-center justify-center">
            <div className="md:w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4">
            <div className="text-center lg:text-start text-5xl space-y-4">
                <p>Join</p>
                <p>Gravity Team</p>
            </div>
            <div className="text-xl text-center lg:text-start font-light  space-y-6">
                <p>Join our community of innovators, problem solvers and owners who apply scientific discovery techniques to make crypto markets a better place for everyone.</p>
                <p>As we emphasize it in our name – Gravity Team, we are a team. A team of bright, talented people, each masters of their specialty, curious about the world and eager to solve the new exciting cryptocurrency market problems, build cool stuff and have fun whilst doing so!</p>
                <div className="w-max space-y-[1px] overflow-hidden mx-auto lg:mx-0">
                    <a href="#" className="text-gradient w-max peer">Learn more about working with us</a>
                    <div className="bg-gradient h-[2px] peer-hover:translate-x-[100%] transition duration-500 ease-out"/>
                </div>
            </div>
            </div>

        </div>
    )
}