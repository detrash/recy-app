import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { LINKS } from '@/constants';
// import { useAuth0 } from '@auth0/auth0-react';

export const Done = () => {
  const { t } = useTranslation();

  // const { user } = useAuth0();
  return (
    <div className="flex flex-1 flex-col justify-between gap-6">
      <div className="flex flex-1 flex-col">
        <section className="flex flex-1 flex-col items-center justify-center gap-4">
          <CheckCircle className="text-success h-40 w-40" />
          <h2 className="text-2xl font-bold">{t('submit:done_title')}</h2>
          <h3 className="text-lg">{t('submit:done_message')}</h3>
        </section>
        <div className="flex items-end justify-center">
          <Link to={LINKS.APP}>
            <Button className="btn btn-primary no-animation w-full text-white sm:w-auto">
              {t('submit:go_to_dashboard')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
