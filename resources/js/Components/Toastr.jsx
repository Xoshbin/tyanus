import React, {useEffect} from "react";
import {Toast} from "flowbite-react";
import {CheckIcon, QuestionMarkCircleIcon, ShieldExclamationIcon} from "@heroicons/react/20/solid";

function Messages({flash}){
    function message(){
        switch (flash) {
            case flash?.success:
                return flash?.success;
            case flash?.error:
                return flash.error;
            case flash?.warning:
                return flash.warning;
            default:
                return flash?.message;
        }
    }

    return (
        <>
            {message()}
        </>
    )
}

function Icon({flash}){
    switch (flash){
        case flash.success:
            return <CheckIcon className="h-5 w-5" />
        case flash.warning:
            return <QuestionMarkCircleIcon className="h-5 w-5"/>
        case flash?.error:
            return <ShieldExclamationIcon className="h-5 w-5" />
        default:
            return <CheckIcon className="h-5 w-5" />
    }
}

export default function Toastr(props){
    const {flash} = props;

    useEffect(() => {
        console.log(flash)
    }, [flash])

    function bgColor(){
        switch (flash){
            case flash?.success:
                return "bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200"
            case flash?.warning:
                return "bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200";
            case flash?.error:
                return "bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200"
            default:
                return "bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200"
        }
    }



    return (
        <Toast duration={75}>
            <div className={"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" + bgColor()}>
                <Icon flash={false} />
            </div>
            <div className="ml-3 text-sm font-normal">
                <Messages flash={flash} />
            </div>
            <Toast.Toggle />
        </Toast>
    )
}
