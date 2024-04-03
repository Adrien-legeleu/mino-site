import { Transition } from "@tailwindui/react";

interface FormProps {
    isVisibleForm : boolean;
    setIsVisibleForm:React.Dispatch<React.SetStateAction<boolean>>
}

const Form : React.FC<FormProps> = ({ isVisibleForm, setIsVisibleForm }) => {
    const closeForm = () => {
        setIsVisibleForm(false);
    };

    return (
        <Transition
            show={isVisibleForm}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            {(ref) => (
                <div
                    ref={ref}
                    className={`h-screen w-screen fixed top-0 left-0 z-[100] duration-500 ease-in-out ${isVisibleForm ? "block" : "hidden"}`}
                >
                    <div className={`h-full w-full bg-blackTransparent backdrop-blur-md duration-500 ease-in-out ${isVisibleForm ? "block" : "hidden"}`} onClick={closeForm}></div>
                    <div className={`h-[95%] w-2/5 bg-grayDark absolute top-1/2 right-10 rounded-3xl -translate-y-1/2  shadow-containerService duration-500 ease-in-out ${isVisibleForm ? "translate-x-0" : "translate-x-[150%] right-0"}`}></div>
                </div>
            )}
        </Transition>
    );
};

export default Form;
