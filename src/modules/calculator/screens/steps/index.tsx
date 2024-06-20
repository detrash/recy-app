import { useTranslation } from 'react-i18next';

import { useCalculatorStore } from '@/stores/use-calculator';

import { CalculatorStepOne } from './step-one';
import { CalculatorStepTwo } from './step-two';

const stepsComponents = {
  1: <CalculatorStepOne />,
  2: <CalculatorStepTwo />,
};

export default function CalculatorStepsTree() {
  useTranslation();

  const { currentStep } = useCalculatorStore();

  return (
    <div className="container mx-auto my-6 flex max-w-xl flex-col justify-center gap-6">
      {stepsComponents[currentStep as keyof typeof stepsComponents]}
    </div>
  );
}
