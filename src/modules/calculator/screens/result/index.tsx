import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useCalculatorStore } from '@/stores/use-calculator';

export default function CalculatorResultScreen() {
  const { inputs } = useCalculatorStore();

  const needContact =
    inputs.company_type === 'product' ||
    (inputs.employees_quantity && inputs.employees_quantity >= 100);

  const wasteFootprint = inputs.employees_quantity && inputs.employees_quantity * 1.5 * 30;

  const handleCalculateCrecys = () => {
    if (!wasteFootprint) {
      return 0;
    }

    if (wasteFootprint <= 4000) {
      return 10;
    }

    return wasteFootprint * 0.01;
  };

  return (
    <>
      <section className="bg- bg-[positon: '100%'] ext-white bg- flex justify-center bg-[url('/assets/bg/ocean-dark.jpg')] bg-cover bg-center p-6 text-center text-white">
        <div className="flex flex-col gap-4">
          {Boolean(needContact) && (
            <div className="flex flex-col gap-4">
              <p className="max-w-96 text-lg">Contact Form Here</p>
              <Button size="lg">Contact us</Button>
            </div>
          )}

          {!needContact && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-bold text-6xl text-primary">
                  {Math.ceil(handleCalculateCrecys())} cRECYs
                </h2>
                <span className="text-base">per month</span>
              </div>
              <Button size="lg">Clean World</Button>
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto my-6 flex max-w-2xl flex-col gap-6">
        <Card className="sm:rounded-xl sm:shadow-xl">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <h2 className="text-lg lg:text-2xl">Lorem ipsum dolor sit amet.</h2>
          </CardHeader>
          <CardContent>
            <p className="text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dignissimos unde quos
              cupiditate, natus molestiae commodi neque iure placeat dolores repudiandae quod labore
              recusandae laborum minus omnis eos praesentium sit.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
