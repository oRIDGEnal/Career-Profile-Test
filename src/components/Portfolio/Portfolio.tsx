import { Card, CardContent } from '../ui/card'

const Portfolio = () => {
  return (
    <Card>
        <CardContent className="p-6">
            <h2 className="text-xl font-semibold">Portfolio</h2>
            <div className="mt-4 grid gap-4 grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map(item => (
                    <div key={item} className="overflow-hidden rounded-lg">
                        <img
                            src={`/images/project${item}.jpg`}
                            alt={`Project ${item}`}
                            width={300}
                            height={200}
                            className="transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
  )
}

export default Portfolio