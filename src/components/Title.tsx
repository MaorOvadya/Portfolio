interface titleType {
  title:string
  number:string
}


function Title({title,number}: titleType) {
  return (
    <div className="text-center md:text-left md:mx-[10%]">
      <h1 className="pb-10 pt-5 text-3xl font-semibold"><span className="text-xl text-red-500">{number}</span>{title}</h1>
    </div>
  )
}

export default Title