import { FreelancerProfile } from '../../utils/types';
import { Card, CardContent } from '../ui/card';
import freelanceData from "../../utils/freelancerProfile.json";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Button } from '../ui/button';

const Portfolio = () => { 
    const FP: FreelancerProfile = freelanceData;
    const portfolioItems = FP.profile.portfolio_items;

    return (
        <Card>
            <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
                <Carousel className="w-full">
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {portfolioItems.map(item => (
                            <CarouselItem key={item.id} className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3">
                                <Card>
                                    <CardContent className="flex flex-col justify-between h-full p-4">
                                        <div>
                                            <h3 className="font-bold truncate">{item.title}</h3>
                                            <p className="text-sm mt-2 line-clamp-3">{item.description}</p>
                                        </div>
                                        <Button
                                            title="View Portfolio"
                                            className="text-white w-full bg-[#51344D] hover:bg-[#6F5060] mt-4"
                                            onClick={() => window.open(item.url, '_blank')}
                                        >
                                            View Portfolio
                                        </Button>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </CardContent>
        </Card>
    );
};

export default Portfolio;