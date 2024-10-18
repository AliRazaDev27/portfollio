import { CircleAnimated } from "./circle-animated";
import { DownloadCard } from "./download-card";

export function WhatWeDo() {
    return(
        <div className="max-w-[90%] sm:max-w-[80%] lg:max-w-[65%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center py-16 gap-8">
            <div className="flex flex-col gap-10">
                <p className="text-4xl font-bold text-primary">At Certo, mobile security is not an afterthought, it’s what we do.</p>
                <p className="text-xl text-primary font-medium">With years of experience in mobile security and spyware detection, our products have helped countless people safeguard their devices and find peace of mind.</p>
                <DownloadCard type="col"/>
            </div>
            <CircleAnimated/>
        </div>
    )
}