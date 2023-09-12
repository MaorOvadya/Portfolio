interface titleType {
  title:string
}


function Title({title}: titleType) {
  return (
    <div className="text-center md:text-left md:mx-[10%]">
      <h1 className="pb-10 pt-5 text-2xl font-semibold">{title}</h1>
    </div>
  )
}

export default Title