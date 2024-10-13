import { Card, CardContent } from '../ui/card'

const Portfolio = () => {
  return (
    <Card>
        <CardContent className="p-6">
            <h2 className="text-xl font-semibold">Portfolio</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
                <a key={item} href="#">
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={`/placeholder.svg?height=200&width=300&text=Project ${item}`}
                        alt={`Project ${item}`}
                        width={300}
                        height={200}
                        className="transition-transform duration-300 hover:scale-110"
                    />
                </div>
                </a>
            ))}
            </div>
        </CardContent>
    </Card>
  )
}

export default Portfolio