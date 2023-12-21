import { getBlogsMeta } from "../utils";
import BlogCard from "../components/BlogCard";

export default async function Blogs() {
  const blogs = await getBlogsMeta()

  if (!blogs) {
    return (
      <div className="flex place-content-center bg-secondary h-screen w-screen">
        <span className="self-center font-bold text-xl lg:text-6xl">No Blogs Found</span>
      </div>
    )
  }

  return (
    <div className="bg-secondary w-screen overflow-scroll">
      <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-row auto-rows-[8rem] md:auto-rows-[15rem] min-h-full p-6 gap-4 md:gap-8 mx-[5%]">
        {
          blogs.map((blog, index) => {
            let cardClass = "row-span-1 col-span-1 ";
            let titleClass = "font-bold text-xl line-clamp-2 ";
            let descriptionClass = "text-lg";
            switch (index) {
              case 0:
                cardClass += "md:row-span-2 md:col-span-2 bg-primary"
                titleClass += "md:text-4xl md:line-clamp-3"
                break;
              case 1:
              case 3:
                cardClass += "md:row-span-2 md:col-span-1 bg-text"
                break;
              default:
                cardClass += "bg-accent"
            }
            return <BlogCard key={index} cardClass={cardClass} titleClass={titleClass} descriptionClass={descriptionClass}  id={blog.id} />
          })
        }
      </div>
    </div>
  )
}
