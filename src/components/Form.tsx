const Form=({isVisibleForm , setIsVisibleForm})=>{

    const closeForm=()=>{
        setIsVisibleForm(false)
    }

    return(
        <div className={`h-screen w-screen fixed top-0 left-0 z-[100] duration-500 ease-in-out ${isVisibleForm ? "block" : "hidden"}`}>
            <div className={`h-full w-full bg-blackTransparent backdrop-blur-md duration-500 ease-in-out ${isVisibleForm ? "block" : "hidden" }`} onClick={closeForm}></div>
            <div className={`h-[95%] w-2/5 bg-grayDark absolute top-1/2 right-10 rounded-3xl -translate-y-1/2  shadow-containerService duration-500 ease-in-out ${isVisibleForm ? "translate-x-0" : "translate-x-[150%] right-0"}`}>

            </div>
        </div>
    )
}

export default Form