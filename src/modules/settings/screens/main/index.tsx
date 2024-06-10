'use client';

import { Separator } from '@/components/ui/separator';
import { useI18n } from '@/locales/client';

import ProfileForm from '../../components/profile/profile-form';

export default function SettingsMainScreen() {
  const t = useI18n();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile settings</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator className="my-4" />
      <ProfileForm />
    </div>
  );
}
