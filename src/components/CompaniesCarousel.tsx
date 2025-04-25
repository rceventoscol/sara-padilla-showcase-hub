
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const companies = [
  {
    name: "Vigox",
    image: "/lovable-uploads/d6393300-f532-4644-8a62-751ab7b9bff9.png"
  },
  {
    name: "Sirenas",
    image: "/lovable-uploads/121e5b6f-debd-4499-9a99-d353976b8b06.png"
  },
  {
    name: "LYM",
    image: "/lovable-uploads/0289a2ca-9693-411d-be79-516aa6b0548a.png"
  },
  {
    name: "Acid Mantle",
    image: "/lovable-uploads/49a2d328-1ea3-4aa4-a8ba-85208d452c2c.png"
  }
];

const CompaniesCarousel = () => {
  return (
    <div className="w-full px-12 py-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {companies.map((company, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="overflow-hidden rounded-full aspect-square bg-white/10 backdrop-blur-sm">
                  <img
                    src={company.image}
                    alt={company.name}
                    className="h-full w-full object-contain p-4 transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CompaniesCarousel;
