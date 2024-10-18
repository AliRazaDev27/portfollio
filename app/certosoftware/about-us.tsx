import { TextAnimated } from "./text-animated";

export function AboutUs(){
    return(
        <div className="max-w-[90%] sm:max-w-[80%] lg:max-w-[65%] mx-auto py-16">
           <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
           <div className=" bg-yellow p-10 rounded-3xl flex flex-col justify-between  gap-8 text-primary">
                <TextAnimated useParent={true}>
                <p className="text-2xl font-bold">Read our story</p>
                </TextAnimated>
                <TextAnimated useParent={true}>
                <p className="text-lg font-medium">Find out why thousands trust Certo to secure their mobile world.</p>
                </TextAnimated>
                <a href="#" className="text-xl font-semibold text-white bg-purple w-max py-3 px-6 rounded-full">About us</a>
            </div>
            <div className="p-10 flex flex-col justify-between  gap-8 text-primary">
            <TextAnimated useParent={true}>
                <p className="text-2xl font-bold">Help Center</p>
                </TextAnimated>
                <TextAnimated useParent={true}>
                <p className="text-lg font-medium">Help topics, getting started guides and FAQs.</p>
                </TextAnimated>
                <a href="#" className="text-xl font-semibold text-white bg-purple w-max py-3 px-6 rounded-full">Visit help center</a>
            </div>
           </div>
        </div>
    )
}