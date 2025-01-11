'use client'

import { useParams } from 'next/navigation'

import { useStripe } from '@/hooks/useStripe'
import Button from '@/components/button'

export default function PlanButtons() {
  const { profileId } = useParams()
  const { createStripeCheckout } = useStripe()

  return (
    <div className="flex gap-4">
      <Button
        onClick={() =>
          createStripeCheckout({
            metadata: { profileId },
            isSubscription: true,
          })
        }
      >
        R$ 9,90 / mês
      </Button>

      <Button
        onClick={() =>
          createStripeCheckout({
            metadata: { profileId },
            isSubscription: false,
          })
        }
      >
        R$ 99,90 Vitalício
      </Button>
    </div>
  )
}
